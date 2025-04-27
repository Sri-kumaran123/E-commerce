const sellerRoute = require('express').Router();
const {getAllProductBasedOnSeller, getSellerInfo, addPhone} = require('../controllers/seller.controller');

sellerRoute.get('/product/:id', getAllProductBasedOnSeller);

sellerRoute.get('/seller-info', getSellerInfo);

sellerRoute.patch('/add-phone/:id', addPhone);

module.exports = sellerRoute;