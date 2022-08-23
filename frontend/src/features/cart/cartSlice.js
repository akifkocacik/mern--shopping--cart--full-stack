import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      products: [],
      totalPrice: 0,
      totalQuantity: 0,
    };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (product) {
        state.products.find(
          (product) => product._id === action.payload._id
        ).quantity += 1;
      } else {
        state.products.push({
          ...action.payload,
          quantity: 1,
        });
      }
      state.totalPrice += action.payload.price;
      state.totalQuantity += 1;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeProduct: (state, action) => {
      const product = state.products.find(
        (product) => product._id === action.payload
      );

      if (product) {
        if (product.quantity > 1) {
          state.products.map((product) => {
            if (product._id === action.payload) {
              product.quantity -= 1;
            }

            return product;
          });
        } else {
          state.products = state.products.filter((product) => {
            return product._id !== action.payload;
          });
        }

        state.totalPrice -= product.price;
        state.totalQuantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
