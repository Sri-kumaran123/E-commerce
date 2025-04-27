const Orders = require('../models/orders.model');
const User = require('../models/user.model');
const Delivary = require('../models/delivery.model');
const Customer = require('../models/customer.model');
const Product = require('../models/product.model');

const createOrder = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        const customer = await Customer.findOne({ user: user._id });

        if (!customer) return res.status(409).json({ msg: "Fields are required" });

        const newOrder = await Orders.create({
            customer: customer._id,
            product: customer.card,
        });

        for (let i of customer.card) {
            let product = await Product.findById(i);
            if (product) {
                product.quantity = product.quantity - 1;
                await product.save();
            }
        }

        customer.history.push(newOrder._id);
        customer.card = []; // Empty the cart after order placed
        await customer.save();

        res.status(200).json({ msg: "Order Placed Successfully", order: newOrder });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ err: err.message });
    }
};


const changeOrderStatus = async (req, res, next) => {
    try {
        const orderId = req.params.id;

        const {status}  = req.body;

        const order = await Orders.findById(orderId);

        if(!order) return res.status(404).json({msg:"Order not found"});

        order.status = status;

        order.save();

        res.status(200).json({msg:"Order Status Updated"});

    } catch (err) {
        res.status(500).json({err:err.message});
    }
}

const setDelivery = async (req, res, next) =>{
    try {
        const deliveryId = req.params.d_id;
        const orderId= req.params.o_id;

        let delivary = await Delivary.findById(deliveryId);

        if(!delivary) return res.status(404).json({msg:"Delivery not found"});

        let orders = await Orders.findById(orderId);

        if(!orders) return res.status(404).json({msg:"Order not found"});

        res.status(200).json({msg:"delivery set on Order"});
    } catch (err) {
        res.status(500).json({err:"Server side error",at:"setDelivery"})
    }
}

const getAllOrder = async (req, res, next) => {
    try {
        const orders = await Orders.find()
        .populate('customer','address phone')
        .populate('product')

        res.status(200).json({orders:orders});
    } catch (err) {
        res.status(500).json({err:"Server side Error", at:"getAll Orders"});
    }
}

const getHistory = async (req, res, next) => {
    try {
        const userId = req.user._id;

        const user = await Customer.findOne({user:userId})
                    .populate({
                        path:'history',
                        populate:{
                            path:'product',
                            model:'Product'
                        }
                    });
                    
        res.status(200).json({ history: user.history });


    } catch (err) {
        res.status(500).json({err:"Server side Error", at:"get History"});
    }
}

module.exports = {
    createOrder,
    setDelivery,
    changeOrderStatus,
    getAllOrder,
    getHistory
};