const { Router } = require('express');
const { route } = require('express/lib/application');
const router = Router();

//controllers
const orderController = require('../controllers/OrderController.js');
const productController = require('../controllers/ProductController.js');
const userController = require('../controllers/UserController.js');
const authController = require('../controllers/AuthController');


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

//auth

router.post('/auth', authController.validate);

module.exports = router;