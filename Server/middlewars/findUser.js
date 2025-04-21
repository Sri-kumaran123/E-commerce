const User = require('../models/user.model.js');
const findUserMiddleware = async (req, res, next) =>{
    try {
        const {email} = req.body;
        const user = await User.findOne({email:email});
        if(user) req.user = user;
        console.log(req?.user);
        next();
    } catch (err) {
        next();
    }
}

module.exports = findUserMiddleware;