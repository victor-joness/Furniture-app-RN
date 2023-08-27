const router = require('express').Router();

const productsControllers = require('../Controllers/ProductsControllers');

router.get('/', productsControllers.getAllProducts);
router.get('/:id', productsControllers.getProductById);
router.get('/search/:key', productsControllers.searchProduct);
router.post('/', productsControllers.createdProduct);

module.exports = router;