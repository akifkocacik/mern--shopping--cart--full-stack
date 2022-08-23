import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../features/cart/cartSlice";
import { getProducts, reset } from "../features/products/productSlice";

import "./Products.css";

const Products = () => {
  const dispatch = useDispatch();

  const { products, isError, message } = useSelector((state) => state.products);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getProducts());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  return (
    <div style={{ width: "100%" }}>
      <h1>Shopping Items</h1>
      <div className="product-list">
        {products &&
          products.map((product) => (
            <div key={product._id} className="product">
              <h2>{product.name}</h2>
              <p>Price: {product.price}$ </p>
              <img src={product.image} alt={product.name} />
              <button onClick={() => dispatch(addProduct(product))}>
                Add To Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
