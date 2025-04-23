const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street: { type: String},
    city:    { type: String},
    state:   { type: String},
    postalCode: { type: String},
    landmark: { type: String }, 
    type: {
      type: String,
      enum: ['home', 'work', 'other'],
      default: 'home'
    }
  });
const customerSchema = mongoose.Schema({
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
    address:{
        type:addressSchema
    },
    history:{
        type:[mongoose.Types.ObjectId],
        ref:"Orders",
        default:[]
    },
    card:{
        type:[mongoose.Types.ObjectId],
        ref:"Product",
        default:[]
    }

});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;