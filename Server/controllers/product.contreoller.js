const Product = require('../models/product.model');
const Seller = require('../models/seller.model');
const Image = require('../models/image.model');

const createProduct = async (req, res, next) => {
    try {
        const {productName, desc, quantity, category,price} = req.body;
        console.log(req.file,req.body)
        if(!productName || !desc || !quantity || !category || !price) return res.status(400).json({msg:"All feilds are required"});

        if (!req.file) {
            return res.status(400).json({ msg: "No file uploaded" });
        }

        // Save file to database
        const newFile = await Image.create({
            path: req.file.path
        });

        const newProduct = await Product.create({
            productName, desc, quantity, img:newFile._id, category,price
        });

        const seller = await Seller.findOne({user:req.user._id});

        if(!seller) return res.status(404).json({msg:"Seller account not created"});

        seller.product.push(newProduct._id);

        await seller.save();

        res.status(201).json({msg:"Product Created", product:newProduct});

    } catch (err) {
        console.log(err.message)
        res.status(500).json({err:err.message});
    }
}

const modifyProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;  
        const updateData = req.body;      

        const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { $set: updateData },
        { new: true, runValidators: true }
        );

        if (!updatedProduct) {
        return res.status(404).json({ error: "Product not found" });
        }

        res.status(200).json({
        message: "Product updated successfully",
        product: updatedProduct
        }); 
    } catch (err) {
        console.log(err.message)
        res.status(500).json({err:err.message});
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;
        
        const deletedProduct = await Product.findByIdAndDelete(productId);
        
        if (!deletedProduct) {
            return res.status(404).json({ msg: "Product not found" });
        }

        const seller = await Seller.findOne({user:req.user._id});

        if(!seller) return res.status(404).json({msg:"Problem in Seller Account"});

        seller.product.pull(deleteProduct._id);

        await seller.save();

        res.status(200).json({ message: "Product deleted successfully", product: deletedProduct });
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
}

const getAllProduct = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({err:err.message});
    }
}

const getProduct = async (req, res, next) =>{
    try {
        const productId = req.params.id;

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ msg: "Product not found" });
        }

        res.status(200).json({product:product});

    } catch (err) {
        res.status(500).json({err:err.message});
    }
}

module.exports = {
    createProduct,
    deleteProduct,
    modifyProduct,
    getAllProduct,
    getProduct
}