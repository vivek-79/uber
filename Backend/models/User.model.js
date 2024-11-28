import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        index:true,
        lowerCase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    avatar:{
        type:String,
        default:"",
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:[true,"Password is required"],

    },
    phone:{
        type:String,
        default:""
    },
    refreshToken:{
        type:String
    }
})

userSchema.pre('save',async function(next){
    if(! this.isModified('password')){
        return next()
    }

    this.password =await bcrypt.hash(this.password,10)
})

userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        _id:this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)
}
userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id:this._id,
        email:this.email,
        userName:this.userName,
        avatar:this.avatar
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

export const User = mongoose.model("User",userSchema)