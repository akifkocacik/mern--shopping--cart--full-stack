import { useDispatch } from "react-redux";
import { deleteProduct } from "../features/products/productSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product">
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <img src={product.image} alt={product.name} />
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
