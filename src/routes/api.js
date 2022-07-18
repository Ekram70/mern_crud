const express = require('express');
const ProductsController = require('../controller/ProductsController');

const router = express.Router();

// API routing endpoint
router.post('/CreateProduct', ProductsController.CreateProduct);
router.get('/ReadProduct', ProductsController.ReadProduct);
router.patch('/UpdateProduct/:id', ProductsController.UpdateProduct);
router.delete('/DeleteProduct/:id', ProductsController.DeleteProduct);

module.exports = router;
