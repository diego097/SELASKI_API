const { Router } = require('express');
const router = Router();

//controllers
const orderController = require('../controllers/OrderController.js');
const productController = require('../controllers/ProductController.js');
const userController = require('../controllers/UserController.js');

//oders
router.post('/orders', orderController.create);
router.delete('/orders', orderController.delete);
router.put('/orders', orderController.update);
router.get('/orders', orderController.get);

//products
router.post('/products', productController.create);
router.delete('/products', productController.delete);
router.put('/products', productController.update);
router.get('/products', productController.get);

//users
router.get('/users', userController.get);

module.exports = router;