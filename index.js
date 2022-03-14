import express from "express";
import connectDB from "./Database/connectDB.js";
import router from "./Routes/router.js";
import cors from "cors";

const app = express()
app.use(cors())


const port = 4000

connectDB();        //db function import from modules



// following both lines is iumportant to get the data from request body
app.use(express.urlencoded({extended:"false"}))
app.use(express.json())

// use route
app.use("/api",router)


//server listning
app.listen(port, () => console.log(`Example app listening on port ${port}!`)) ;