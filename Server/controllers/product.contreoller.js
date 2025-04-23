const Product = require('../models/product.model');

const createProduct = async (req, res, next) => {
    try {
        const {productName, desc, imgUrl, quntity} = req.body;

        if(!productName || !desc || !quntity) req.status(400).json({msg:"All feilds are required"});

        const newProduct = await Product.create({
            productName, desc, quntity, imgUrl
        });

    } catch (err) {
        res.status(500).json({err:err.message});
    }
}

const modifyProduct = asyc (req, res, next) => {
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
        res.status(500).json({err:err.message});
    }
}