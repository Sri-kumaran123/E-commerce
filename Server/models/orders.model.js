const mongoose  = require('mongoose');

const ordersSChema = mongoose.Schema({
    customer:{
        type:mongoose.Types.ObjectId,
        ref:"Customer",
        required:true
    },
    status:{
        type:String,
        enum:['Processing','Success','Faliure'],
        required:true,
        default:"Processing"
    },
    product:{
        type:[mongoose.Types.ObjectId],
        default:[],
        required:true
    },
    delivary :{
        type:mongoose.Types.ObjectId,
        ref:"Delivary",
        required:true,
    }
},{timeStamp:true});

const Orders = mongoose.model('Orders',ordersSChema);
module.exports = Orders;