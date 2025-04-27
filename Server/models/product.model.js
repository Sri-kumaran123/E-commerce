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
    img:{
        type:mongoose.Types.ObjectId,
        ref:"Image"
    },
    quantity:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;