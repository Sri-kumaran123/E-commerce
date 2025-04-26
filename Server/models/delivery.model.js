const mongoose = require('mongoose');

const delivarySchema = mongoose.Schema({
    user:{
            type:mongoose.Types.ObjectId,
            ref:'User',
            required:true
    },
    phone:{
            type:Number,
            maxLength:10
    },
});

const Delivary = mongoose.model('Delivary',delivarySchema);

module.exports = Delivary;