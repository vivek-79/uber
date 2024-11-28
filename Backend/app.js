
import cors from 'cors'
import express from 'express'
import { userRoute } from './routes/User.routes.js'
import cookieParser from 'cookie-parser'


const app =express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(cookieParser())
app.get('/',(req,res)=>{

    res.send('Hello Bhosdi')
})

app.use("/v1/users",userRoute)

export {app}