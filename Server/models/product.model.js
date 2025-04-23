const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
    },
    quantity:{
        type:Number,
        default:0
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;