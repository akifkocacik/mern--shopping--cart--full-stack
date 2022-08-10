const express = require("express");
const router = express.Router();
const {
  getCartProducts,
  updateCartProduct,
  deleteCartProduct,
} = require("../controllers/cartController");

router.route("/").get(getCartProducts);
router.route("/:id").put(updateCartProduct).delete(deleteCartProduct);

module.exports = router;
