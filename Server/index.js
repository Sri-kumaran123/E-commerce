const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const CORS = require('cors');
const {
    authRoute
} = require('./routes');
const getUserRoute = require('./libs/checkauthuser.js');


// files
const connectDB = require('./libs/db.js');
const protectRouteMiddleware = require('./middlewars/prodectRoute.js');


dotenv.config();
const app = express();

app.use(CORS({
    credentials:true,
    origin:process.env.TEST === 'true' ? 'http://localhost:5173' : process.env.FRONTEND_URL
}))
app.use(express.json());
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.json('hi');
})
app.use('/v1/auth',authRoute);
app.use(protectRouteMiddleware);
app.use('/v1/check', getUserRoute);
app.get('/test',(req,res)=>{
    res.json('hi');
});


app.listen(process.env.PORT,()=>{
    console.log("Server Started successfully");
    connectDB();
});