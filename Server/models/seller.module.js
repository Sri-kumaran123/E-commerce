const mongoose = require('mongoose');

const sellerSchema = mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    phone:{
        type:Number,
        required:true,
        maxLength:10
    },
    product:{
        type:[mongoose.Types.ObjectId],
        ref:"Product",
        default:[],
        required:true
    }
});

const Seller = mongoose.model('Seller', sellerSchema);
module.exports = Seller;