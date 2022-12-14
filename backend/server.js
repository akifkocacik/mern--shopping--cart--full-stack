const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const {errorHandler} = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
var bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
