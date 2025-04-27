const productRoute = require('express').Router();
const {
    createProduct,
    deleteProduct,
    modifyProduct,
    getAllProduct,
    getProduct
} = require('../controllers/product.contreoller');
const upload = require('../middlewars/upload');

productRoute.post('/create-product', upload.single('file'),createProduct);

productRoute.delete('/delete-product/:id', deleteProduct);

productRoute.patch('/update-product/:id', modifyProduct);

productRoute.get('/get-all-product', getAllProduct);

productRoute.get('/get-product/:id', getProduct);

module.exports = productRoute;