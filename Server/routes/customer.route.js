const customerRoute = require('express').Router();
const {
    createCusomer,
    addressCustomer,
    getCustomer,
    addProductCart,
    removeProductFromCart,
    getProductFromCart,
    addPhone
} = require('../controllers/customer.controller');

customerRoute.post('/add-address', addressCustomer);

customerRoute.get('/get-user-info', getCustomer)

customerRoute.patch('/add-product-cart/:id',addProductCart);

customerRoute.delete('/remove-product-cart/:id', removeProductFromCart);

customerRoute.get('/get-cart', getProductFromCart);

customerRoute.post('/add-phone',addPhone);

module.exports = customerRoute;