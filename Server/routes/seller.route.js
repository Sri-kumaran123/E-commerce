const sellerRoute = require('express').Router();
const {getAllProductBasedOnSeller, getSellerInfo} = require('../controllers/seller.controller');

sellerRoute.get('/product/:id', getAllProductBasedOnSeller);

sellerRoute.get('/seller-info', getSellerInfo);

module.exports = sellerRoute;