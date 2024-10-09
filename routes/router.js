const express = require('express')
const productController = require('../controllers/productController')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const wishlistController = require('../controllers/wishlistController')
const cartController = require('../controllers/cartController')

const router = new express.Router()


//get all pdts
router.get('/all-products',productController.getAllProductsController)

//view pdt
router.get('/:id/view-product',productController.getAProductController)

//register
router.post('/register',userController.registerController)

//login
router.post('/login',userController.loginController)

//addtowishlist
router.post('/addToWishlist',jwtMiddleware,wishlistController.addToWishlist)

//get wishlist
router.get('/get-wishlist',jwtMiddleware,wishlistController.getWishlist)

//remove wishlist
router.delete('/wishlist/:id/remove',jwtMiddleware,wishlistController.removeWishlistItem)

//addto cart
router.post('/addToCart',jwtMiddleware,cartController.addToCart)

//get cart
router.get('/get-cart',jwtMiddleware,cartController.getCart)

//removecart item
router.delete('/cart/:id/remove',jwtMiddleware,cartController.removeCartItem)

//incre cart
router.get('/cart/:id/increment',jwtMiddleware,cartController.incrementCart)

//dec cart
router.get('/cart/:id/decrement',jwtMiddleware,cartController.decrementCart)

//empty cart
router.delete('/empty-cart',jwtMiddleware,cartController.emptyCart)


module.exports = router