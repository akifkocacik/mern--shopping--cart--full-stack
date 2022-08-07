const asyncHandler = require("express-async-handler");

// @desc Get all products
//  @route GET /cart
// @access Private
const getProducts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

// @desc Update product
//  @route PUT /cart/:id
// @access Private
const updateProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update product ${req.params.id}` });
});

// @desc Delete product
//  @route DELETE /cart/:id
// @access Private
const deleteProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete product ${req.params.id}` });
});

module.exports = { getProducts, updateProduct, deleteProduct };
