const express = require("express");
const router = express.Router();
const { getProducts, setProduct } = require("../controllers/productController");

router.route("/").get(getProducts).post(setProduct);

module.exports = router;
