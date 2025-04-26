const getUserRoute = require('express').Router();

getUserRoute.get('/getuser', async (req, res, next)=>{
    try{
        // console.log('i called', req.user)
        if(!req.user) return res.status(200).json({auth:flase});

        res.status(200).json({auth:true});
    } catch (err) {
        res.status(500).json({auth:false});
    }
});

module.exports = getUserRoute;