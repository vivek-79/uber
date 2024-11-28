
import { app } from "./app.js";
import dotenv from 'dotenv'
import dbCoonect from './db/index.js'
const port = process.env.PORT

dotenv.config({
    path:'./.env'
})

dbCoonect()
.then(()=>
    app.listen(port || 8000,()=>{
        console.log(`app listening on port ${port}`)
    })
)
.catch((err)=>{
    console.log("MongoDB connection fell",err)
})

