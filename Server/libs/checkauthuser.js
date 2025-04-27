const getUserRoute = require('express').Router();
const Image = require('../models/image.model');
const path = require('path');
const Product =require('../models/product.model');

getUserRoute.get('/getuser', async (req, res, next)=>{
    try{
        // console.log('i called', req.user)
        if(!req.user) return res.status(200).json({auth:flase});
        
        res.status(200).json({auth:true,user:req.user});
    } catch (err) {
        res.status(500).json({auth:false});
    }
});

getUserRoute.get('/image/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const image = await Image.findById(id);

        if (!image) {
            return res.status(404).json({ msg: "File not found" });
        }

        const filePath = path.resolve(image.path);

        // Send the file to the client
        res.download(filePath, (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ msg: "Error downloading file" });
            }
        });

    } catch (err) {

    }
});

getUserRoute.get('/all-product',async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({err:err.message});
    }
})



module.exports = getUserRoute;