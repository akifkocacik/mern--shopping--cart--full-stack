import axios from "axios";

const API_URL = "/api/products/";

// Create new product
const createProduct = async (productData, email, password) => {
  const config = {
    body: {
      email: `${email}`,
      password: `${password}`,
    },
  };
  const response = await axios.post(API_URL, productData, config);

  return response.data;
};

// Get user products
const getProducts = async (email, password) => {
  const config = {
    body: {
      email: `${email}`,
      password: `${password}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete product
const deleteProduct = async (id, email, password) => {
  const config = {
    body: {
      email: `${email}`,
      password: `${password}`,
    },
  };
  const response = await axios.delete(API_URL + id, config);

  return response.data;
};

const productService = {
  createProduct,
  getProducts,
  deleteProduct,
};

export default productService;