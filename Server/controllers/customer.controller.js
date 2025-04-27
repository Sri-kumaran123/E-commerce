const Customer = require('../models/customer.model');
const User = require('../models/user.model');

const createCustomer = async (req, res, next) => {
    const {phone} = req.body;
    try {
        let customer = Customer.findOne({phone});

        if(user) res.status(422).json({msg:"Phone Number Already exists in another account"});

        let newCustomer = Customer.create({phone,user:req.user._id});

        res.status(201).json({msg:"Customer Detail Created"});

    } catch (err) {
        res.status(500).json({err:"Server side Error",at:"Create Customer Deatail"});
    }
}

const addressCustomer = async (req, res, next) => {

    try {
        const userId = req.user._id; 
        const addressData = req.body; 

        const customer = await Customer.findOne({ user: userId });

        if (!customer) {
        return res.status(404).json({ error: "Customer not found" });
        }

        customer.address = addressData;

        await customer.save();

        res.status(200).json({ message: "Address added successfully", address: customer.address });

    } catch (err) {
        res.status(500).json({err:"Server side Error",at:"Customer Address"});
    }
}

const getCustomer = async (req, res, next) => {
    try {
        let user = req.user;

        const customer = await Customer.findOne({user:user._id}).populate('user');

        if(!customer)  return res.status(404).json({msg:"Customer detail not found"});

        res.status(200).json({info:customer});

    } catch (err) {
        console.log(err.message);
        res.status(500).json({err:"Server side error", at:"getCustomer", msg:err.message});
    }
}

const addProductCart = async (req, res, next) =>{
    try {
        const proId = req.params.id;
        let user = req.user;

        console.log(user)
       
        const customer = await Customer.findOne({user:user._id});

        if(!customer)  return res.status(404).json({msg:"Customer detail not found"});

        customer.card.push(proId);

        customer.save();

        res.status(200).json({msg:"product added to cart"});

    } catch (err) {
        console.log(err.message);
        res.status(500).json({err:"Server side error", at:"getCustomer", msg:err.message});
    }
}

const removeProductFromCart = async (req, res, next) =>{
    try {
       
        let user = req.user;
        let proId = req.params.id;

        const customer = await Customer.findOne({user:user._id});

        if(!customer)  return res.status(404).json({msg:"Customer detail not found"});

        customer.card.pop(proId);

        customer.save();

        res.status(200).json({msg:"product added to cart"});

    } catch (err) {
        console.log(err.message);
        res.status(500).json({err:"Server side error", at:"getCustomer", msg:err.message});
    }
}

const getProductFromCart = async (req, res, next) => {
    try {
        
        let user = req.user;

        const customer = await Customer.findOne({user:user._id}).populate('card')

        if(!customer)  return res.status(404).json({msg:"Customer detail not found"});

        

        res.status(200).json({product:customer.card});

    } catch (err) {
        res.status(500).json({err:"Server side error", at:"getCustomer", msg:err.message});
    }
}

const addPhone = async (req, res, next) => {
    try {
        
        const user = req.user;
        const { phone } = req.body;

        const customer = await Customer.findOne({ user: user._id });

        if (!customer) {
            return res.status(400).json({ msg: "Customer details not found" });
        }

        customer.phone = phone;
        await customer.save();

        res.status(200).json({ msg: "Phone number updated successfully", customer });

    } catch (err) {
        console.log(err.message);
        res.status(500).json({err:"Server side error", at:"getCustomer", msg:err.message});
    }
}


module.exports = {
    createCustomer,
    addressCustomer,
    getCustomer,
    addProductCart,
    removeProductFromCart,
    getProductFromCart,
    addPhone
}

 