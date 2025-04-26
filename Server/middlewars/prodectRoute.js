
const {
    verifyToken
} = require('../libs/services');
const User = require('../models/user.model');
const protectRouteMiddleware = async (req, res, next) => {
    try {
        const accessToken = req?.cookies?.accessToken;
        // console.log(accessToken);
        if (!accessToken) {
            return res.status(401).json({ message: "Unauthorized, please login" });
        }

        const decode = await verifyToken(accessToken,true);
        const user = await User.findById(decode._id);

        if (!user) {
            return res.status(401).json({ message: "IUnauthorized, please login" });
        }

        req.user = user;
        next(); 
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: "Unauthorized access" });
    }
};

module.exports = protectRouteMiddleware;