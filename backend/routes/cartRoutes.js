const express = require("express");
const router = express.Router();
const {
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/cartController");

router.route("/").get(getProducts);
router.route("/:id").put(updateProduct).delete(deleteProduct);

module.exports = router;
