const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 3000;

connectDB();

const app = express();

app.use('/products', require('./routes/productRoutes'));
app.use('/cart', require('./routes/cartRoutes'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
