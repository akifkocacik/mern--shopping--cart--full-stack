const asyncHandler = require("express-async-handler");

const Product = require("../models/productModel");
// @desc Get all products
//  @route GET /products
// @access Private
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.status(200).json(products);
});

// @desc Set product
//  @route POST /products
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

// @desc Update product
//  @route PUT /products/:id
// @access Private
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }

  const updatedProduct = Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedProduct);
});

// @desc Delete product
//  @route DELETE /products/:id
// @access Private
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }

  await product.remove();

  res.status(200).json({id: req.params.id});
});

module.exports = { getProducts, updateProduct, deleteProduct, setProduct };
