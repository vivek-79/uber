
import mongoose from "mongoose";
const URI = String(process.env.MONGOBD_URI)
const dbConnect =async()=>{
    try {
        const connectdb =await mongoose.connect('mongodb+srv://vivek:vivek7970@travel.dpufv.mongodb.net/travel')
        console.log('db Connected')
        console.log(URI)
    } catch (error) {
        console.log(error.message)
    }
}

export default dbConnect