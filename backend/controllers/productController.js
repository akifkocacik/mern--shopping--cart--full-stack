const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc Get all products
// @route GET /products
// @access Private
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.status(200).json(products);
});

// @desc Set product
// @route POST /products
// @access Private
const setProduct = asyncHandler(async (req, res) => {
  if (!req.body.name || !req.body.price || !req.body.image) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }
  const product = await Product.create({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
  });

  res.status(200).json(product);
});

module.exports = { getProducts, setProduct };
