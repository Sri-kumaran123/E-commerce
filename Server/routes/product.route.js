const productRoute = require('express').Router();
const {
    createProduct,
    deleteProduct,
    modifyProduct,
    getAllProduct,
    getProduct
} = require('../controllers/product.contreoller');

productRoute.post('/create-product', createProduct);

productRoute.delete('/delete-product/:id', deleteProduct);

productRoute.patch('/update-product/:id', modifyProduct);

productRoute.get('/get-all-product', getAllProduct);

productRoute.get('/get-product/:id', getProduct);

module.exports = productRoute;