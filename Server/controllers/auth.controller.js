const User = require('../models/user.model');
const Customer = require('../models/customer.model');
const Seller = require('../models/seller.model');
const Delivery = require('../models/delivery.model');
const {
    generateAccessToken,
    generateRefreshToken,
    verifyToken
} = require('../libs/services');

const signUp = async (req, res, next) =>{
    const {email, password, userName} = req.body;
    let {role} = req.body;

    const user = req.user;
    
    try{
        if(user) return res.status(409).json({msg:"User Already Exist!"});

        if(!email || !password || !userName) res.status(400).json({msg:"All feild are required"});
        if(!role) role = "user";
        const newUser = await User.create({email,password,userName,role});

        switch(role){
            case 'seller':
                await Seller.create({user:newUser._id});
                break;
            case 'delivery':
                await Delivery.create({user:newUser._id});
                break;
            default:
                await Customer.create({user:newUser._id});
        }
        res.status(201).json({name:newUser?.userName});
    } catch (err) {
        console.log(err.message)
        res.status(500).json({err:err.message,at:"Sign up"});
    }
}

const logIn = async (req, res, next) => {
    let {email, password} = req.body;
    let user = req.user;
    try {
        if (!email || !password) return res.status(400).json({ msg: "All fields are required" });
        if (!user) return res.status(404).json({ msg: "User not found" });
        user = await User.findById(user._id);
        let isMatch = await user.comparePassword(password);

        if(!isMatch){
            return res.status(400).json({message:"invalide credentials"});
        }
        const accessToken = await generateAccessToken({ _id: user._id, email: user.email });
        const refreshToken = await generateRefreshToken({ _id: user._id, email: user.email });

        res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        sameSite: "Strict",
        secure: false // change to true in HTTPS
        });

        res.cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
        sameSite: "Strict",
        secure: false // change to true in HTTPS
        });

        return res.status(200).json({ message: "Login successfully" });
         
    } catch (err) {
        res.status(500).json({err:err.message,at:"Log in"});
    }
}

const getAccessToken = async (req, res, next) =>{

    try {
        const refreshToken=req?.cookies?.refreshToken;
        if(!refreshToken) return res.status(403).json({message:"Unauthorized please login"});

        let decode=await verifyToken(refreshToken);

        let user = await User.findById(decode._id);

        if(!user) return res.status(403).json({message:"Invlaid Credentials"});

        let accessToken=await generateAccessToken({_id:decode._id,email:decode.email});
        res.cookie("accessToken",accessToken,{httpOnly:true,maxAge:15*60*1000,secure:false,sameSite:"strict"});
        return res.status(200).json({message:"Token validated sucessfully"});
    } catch (err) {
        res.status(500).json({err:err.message,at:"Refresh Token"});
    }
}

const logout=async(req,res,next)=>{
    try{
        let user=req?.user
        res.clearCookie("refreshToken");
        res.clearCookie("accessToken");

        return res.status(200).json({message:"logout successfully"});
    }catch(err){
        console.log(err.message);
        return res.status(500).json({message:err?.message});
    }
}

module.exports = {
    signUp,
    logIn,
    getAccessToken,
    logout,
}

