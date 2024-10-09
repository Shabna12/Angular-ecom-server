const products = require('../models/productModel')

//get all pdts
exports.getAllProductsController = async (req,res) => {
    console.log("Inside getAllProductsController");
    try {
        const allProducts = await products.find()
        res.status(200).json(allProducts)
    } catch (err) {
        res.status(401).json(err);
    }
}

//view single pdt
exports.getAProductController = async (req,res) => {
    console.log("Inside getAProductController");
    const {id} = req.params
    try {
        const singleProduct = await products.findOne({id})
        res.status(200).json(singleProduct)
    } catch (err) {
        res.status(401).json(err);
    }
}