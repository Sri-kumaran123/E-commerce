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

module.exports = {
    createCustomer,
    addressCustomer
}

 