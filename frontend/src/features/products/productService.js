import axios from "axios";

const API_URL = "/api/products/";

// Create new product
const createProduct = async (productData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(API_URL, productData, config);

  return response.data;
};

// Get user products
const getProducts = async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

const productService = {
  createProduct,
  getProducts,
};

export default productService;