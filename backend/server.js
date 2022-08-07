const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();

app.use('/products', require('./routes/productRoutes'));
app.use('/cart', require('./routes/cartRoutes'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
