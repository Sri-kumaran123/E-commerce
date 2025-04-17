const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const CORS = require('cors');


// files
const connectDB = require('./libs/db.js');


dotenv.config();
const app = express();

app.use(CORS({
    credentials:true,
    origin:process.env.TEST === 'true' ? '*' : process.env.FRONTEND_URL
}))
app.use(express.json());
app.use(cookieParser());

app.listen(process.env.PORT,()=>{
    console.log("Server Started successfully");
    connectDB();
})