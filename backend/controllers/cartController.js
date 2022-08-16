const asyncHandler = require("express-async-handler");

const Cart = require("../models/cartModel");
const User = require("../models/userModel");

// @desc Get all products
//  @route GET /products
// @access Private
const getCartProducts = asyncHandler(async (req, res) => {
  const cartProducts = await Cart.find();

  res.status(200).json(cartProducts);
});

// @desc Update product
//  @route PUT /products/:id
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
//  @route DELETE /products/:id
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

module.exports = { getCartProducts, updateCartProduct, deleteCartProduct };
