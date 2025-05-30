const jwt = require('jsonwebtoken');

const generateAccessToken = (user) =>{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
}

const generateRefreshToken = (user) =>{
    return jwt.sign(user,process.env.REFRESH_TOKEN_SECRET,{expiresIn:"7d"});
}

const verifyToken = (token,isAccess) => jwt.verify(token,isAccess?process.env.ACCESS_TOKEN_SECRET:process.env.REFRESH_TOKEN_SECRET);



module.exports = {
    generateAccessToken,
    generateRefreshToken,
    verifyToken,
}