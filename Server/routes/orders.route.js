const ordersRoute = require('express').Router();
const {
    createOrder,
    setDelivery,
    changeOrderStatus,
    getAllOrder,
    getHistory
} = require('../controllers/orders.controller');

ordersRoute.post('/create-order', createOrder);

ordersRoute.patch('/order-status/:id', changeOrderStatus);

ordersRoute.get('/set-delivery/:d_id/:o_id', setDelivery);

ordersRoute.get('/get-all-order', getAllOrder);

ordersRoute.get('/get-history', getHistory);



module.exports = ordersRoute;