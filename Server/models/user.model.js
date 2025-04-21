const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    email:{
        required:true,
        type:String,
        unique: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type: String,
        required: true,
    },
    userName:{
        required:true,
        type:String
    },
    role:{
        type: String,
        required: true,
        enum: ['user', 'seller', 'delivery'],
        default: 'user'
    }
});

userSchema.pre('save', async function (next){
    if(!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema);
module.exports = User;