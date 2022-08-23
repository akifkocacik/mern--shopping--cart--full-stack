import axios from "axios";

const API_URL = "/api/cart/";

// Create new cart product
const createCartProduct = async (productData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(API_URL, productData, config);
  
    return response.data;
  };

// Get cart products
const getCartProducts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete cart product
const deleteCartProduct = async (id, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(API_URL + id, config);
  
    return response.data;
  };

// Update cart product
const updateCartProduct = async (id, productData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.put(API_URL + id, productData, config);

    return response.data;
}


const CartService = {
  getCartProducts,
  createCartProduct,
  deleteCartProduct,
  updateCartProduct,
};

export default CartService;
