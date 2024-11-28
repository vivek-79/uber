
import { asyncHandler } from '../utils/asyncHandler.js'
import { User } from '../models/User.model.js'
import { apiResponse } from '../utils/apiResponse.js'
import jwt from 'jsonwebtoken'

const registerUser = asyncHandler(async (req, res) => {

    const { userName, fullName, email, password, phone } = req.body
    console.log(userName, fullName, email, password, phone)
    if ([userName, fullName, email, password].some((field) => {
        field?.trim() === ""
    })) {
        return res.status(200).json(
            new apiResponse(400, null, "All fields are required", false)
        )
    }
    try {

        const existingUser = await User.findOne({
            $or: [{ email: email }, { userName: userName }]
        })

        if (existingUser) {
            return res.status(200).json(
                new apiResponse(400, null, "Account already exists try login", false)
            )
        }

        const user = await User.create({
            userName,
            fullName: fullName.toLowerCase(),
            email,
            password,
            phone: phone || ""
        })

        const newUser = await User.findById(user._id).select('-password -refreshToken')

        return res.status(200).json(
            new apiResponse(201, newUser, "Account created successfully", true)
        )
    }
    catch (error) {
        return res.status(200).json(
            new apiResponse(505, null, "Server not responding", false)
        )
    }
})

const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    if (!email || !password) {
        return res.status(200)
            .json(
                new apiResponse(400, null, "Invalid email or password", false)
            )
    }

    try {
        const user = await User.findOne({ email: email })

        if (!user) {
            return res.status(200)
                .json(
                    new apiResponse(400, null, "No account found prefer registering")
                )
        }

        const isPasswordCorrect = await user.isPasswordCorrect(password)
        if (!isPasswordCorrect) {
            return res.status(200)
                .json(
                    new apiResponse(200, null, "Password is wrong", false)
                )
        }

        const accessToken = await user.generateAccessToken()
        const refreshToken = await user.generateRefreshToken()
        if (!accessToken || !refreshToken) {
            return res.status(200).json(
                new apiResponse(500, null, "Error signing in try again", false)
            )
        }
        else {
            user.refreshToken = refreshToken;
            await user.save({ validateBeforeSave: false })

            const options = {
                httpOnly: true,
                secure: true
            }
            const newUser = await User.findById(user._id).select('-password -refreshToken')
            return res.status(200)
                .cookie('accessToken', accessToken, options)
                .cookie('refreshToken', refreshToken, options)
                .json(
                    new apiResponse(201, newUser, "Account created successfully", true)
                )
        }
    } catch (error) {
        return res.status(400)
            .json(
                new apiResponse(400, null, "Server error try after sometime", false)
            )
    }

})

const verifyAuthentication = asyncHandler(async (req, res) => {

    const cookies = req.cookies
    
    const { accessToken, refreshToken } = cookies

    if (!accessToken && !refreshToken) {
        return res.status(200)
            .json(new apiResponse
                (400, null, 'Authentication tokens are missing', false)
            )
    }

    if (!accessToken) {
        console.log('will to it later part')//will do it later
    }

    const data= jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET)

    if (!data) {
        return res.status(200)
            .json(new apiResponse
                (400, null, 'Invalid token', false)
            )
    }
    return res.status(200)
        .json(new apiResponse
            (400, data, 'Data fetched successfully', true)
        )
})
export {
    registerUser,
    loginUser,
    verifyAuthentication
}