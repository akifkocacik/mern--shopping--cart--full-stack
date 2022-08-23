import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../features/cart/cartSlice";

import { MdArrowUpward, MdArrowDownward } from "react-icons/md";

import "./Cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cart</h1>
      {!cart.products.length ? (
        <h2
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "3rem",
          }}
        >
          Your cart is empty.
        </h2>
      ) : (
        <>
          <div className="cart-list">
            <table>
              <thead>
                <tr>
                  <td>Image </td>
                  <td> Name </td>
                  <td> Price </td>
                  <td>Quantity </td>
                </tr>
              </thead>
              <tbody>
                {cart.products.map((product) => (
                  <tr key={product._id}>
                    <td>
                      <img src={product.image} alt={product.name} />
                    </td>
                    <td>{product.name} </td>
                    <td>{product.price} </td>
                    <td>
                      <button
                        className="down-btn"
                        onClick={() => dispatch(removeProduct(product._id))}
                      >
                        <MdArrowDownward />
                      </button>
                      {product.quantity}
                      <button
                        className="up-btn"
                        onClick={() => dispatch(addProduct(product))}
                      >
                        <MdArrowUpward />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Total Price: {totalPrice}$ </p>
        </>
      )}
    </div>
  );
};

export default Cart;
