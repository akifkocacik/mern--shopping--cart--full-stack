const asyncHandler = require("express-async-handler");

const Cart = require("../models/cartModel");
const User = require("../models/userModel");

// @desc Get all products
// @route GET /products
// @access Private
const getCartProducts = asyncHandler(async (req, res) => {
  const cartProducts = await Cart.find();

  res.status(200).json(cartProducts);
});

// @desc Set product
// @route POST /products
// @access Private
const createCartProduct = asyncHandler(async (req, res) => {
  if (!req.body.name || !req.body.price || !req.body.image) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }
  const cartProduct = await Cart.create({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    user: req.user.id,
  });

  res.status(200).json(cartProduct);
});

// @desc Update product
// @route PUT /products/:id
// @access Private
const updateCartProduct = asyncHandler(async (req, res) => {
  const cartProduct = await Cart.findById(req.params.id);

  if (!cartProduct) {
    res.status(400);
    throw new Error("Product not found");
  }

  const user = await User.findById(req.user.id);

  // Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Logged in user is the owner of the product
  if (cartProduct.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedCartProduct = Cart.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedCartProduct);
});

// @desc Delete product
// @route DELETE /products/:id
// @access Private
const deleteCartProduct = asyncHandler(async (req, res) => {
  const cartProduct = await Cart.findById(req.params.id);

  if (!cartProduct) {
    res.status(400);
    throw new Error("Product not found");
  }

  const user = await User.findById(req.user.id);

  // Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Logged in user is the owner of the product
  if (cartProduct.user.toString() != user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await cartProduct.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCartProducts,
  createCartProduct,
  updateCartProduct,
  deleteCartProduct,
};
