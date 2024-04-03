import  express  from "express";
import cookieParser from "cookie-parser";
import connectDB from "./db/index.js";
import cors from "cors";
import dotenv from "dotenv"


dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(cookieParser())
app.use(express.json());

app.use(express.urlencoded({ extended: true }));



// Importing routes
import sendEmail from "./routes/sendEmail.route.js"

 app.use("/Health",(req,res)=>res.send("OK"));
 app.use("/api/v1/",sendEmail);



connectDB().then(()=>{
    app.listen(PORT||8080, ()=>{
        console.log(`⚙️ Server is running at port : ${PORT}`); 
    })
})