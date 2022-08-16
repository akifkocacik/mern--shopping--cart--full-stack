import { useDispatch } from "react-redux";
import { deleteProduct } from "../features/products/productSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
      <button
        onClick={() => dispatch(deleteProduct(product._id))}
        className="close"
      >
        X
      </button>
    </div>
  );
};

export default ProductItem;
