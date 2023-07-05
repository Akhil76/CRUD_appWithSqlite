const express = require('express');
const router = express.Router();
const {products,product,addproduct} = require('../controllers/ProductRouter');

router.get('/products',products);
router.get('/product/:id',product);
router.post('/product',addproduct);

module.exports = router;