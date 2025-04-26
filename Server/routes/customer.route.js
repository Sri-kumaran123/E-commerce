const customerRoute = require('express').Router();
const {
    createCusomer,
    addressCustomer,
    getCustomer
} = require('../controllers/customer.controller');

customerRoute.post('/add-address', addressCustomer);

customerRoute.get('/get-user-info', getCustomer)

module.exports = customerRoute;