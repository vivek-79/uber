
import { Router } from "express";
import { registerUser ,loginUser, verifyAuthentication} from "../controllers/User.controller.js";

const userRoute= Router()

userRoute.route('/register').post(registerUser)
userRoute.route('/login').post(loginUser)
userRoute.route('/auth/varify').get(verifyAuthentication)

export {userRoute}