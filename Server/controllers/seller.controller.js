const Seller = require('../models/seller.model');
const createSeller = async (req, res, next) => {
    try {
        const userId = req.user._id;
        const {phone} = req.body;

        let seller = await Seller.findOne({phone});

        if(seller) return res.status(409).json({msg:"Phone already available on another account"});

        let newSeller = await Seller.create({
            user:userId,
            phone
        });

        res.status(201).json({msg:"Seller Account Created Succesfully"});


    } catch (err) {
        res.status(500).json({err:err.message, at:"Seller Account Creation"});
    }
}

const getAllProductBasedOnSeller = async (req, res, next) =>{
    try {
        const sellerId= req.params.id;

        const seller = await Seller.findById(sellerId).populate('product');

        if (!seller) {
            return res.status(404).json({ msg: "Seller not found" });
        }

        res.status(200).json({
            msg: "Products fetched successfully",
            products: seller.product
        });

    } catch (err) {
        res.status()
    }
}

const getSellerInfo = async (req, res, next) =>{
    try {
        let user = req.user;

        let seller = await Seller.findOne({user:user._id}).populate('user');

        if(!seller) return res.status(404).json({msg:"Seller not found"});

        res.status(200).json({info:seller})

    } catch (err) {
        res.status(500).json({err:err.message, at:"getSelleinfo", msg:"Server side error"});
    }
}

module.exports = {
    createSeller,
    getAllProductBasedOnSeller,
    getSellerInfo
}