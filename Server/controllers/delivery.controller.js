const Delivary = require('../models/delivery.model');

const createDelivary = async (req, res, next) => {
    try {
        const {phone}  = req.body;

        const newDelivery = await Delivary.create({phone});

        res.status(200).json({msg:"Delivery account created", delivary:newDelivery});
    } catch (err) {
        res.status(500).json({err:err.message});
    }
}

module.exports = {createDelivary};