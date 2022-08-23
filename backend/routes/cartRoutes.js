const express = require("express");
const router = express.Router();
const {
  getCartProducts,
  createCartProduct,
  updateCartProduct,
  deleteCartProduct,
} = require("../controllers/cartController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getCartProducts).post(protect, createCartProduct);
router
  .route("/:id")
  .put(protect, updateCartProduct)
  .delete(protect, deleteCartProduct);

module.exports = router;
