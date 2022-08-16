import { useState } from "react";
import { useDispatch } from "react-redux";

import { createProduct } from "../features/products/productSlice";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createProduct(product));
    setProduct({
      name: "",
      price: "",
      image: "",
    });
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Product Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={product.name}
            onChange={(e) =>
              setProduct({
                ...product,
                name: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="number">Product Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={product.price}
            onChange={(e) =>
              setProduct({
                ...product,
                price: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Product Image</label>
          <input
            type="url"
            name="image"
            id="image"
            value={product.image}
            onChange={(e) =>
              setProduct({
                ...product,
                image: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Product
          </button>
        </div>
      </form>
    </section>
  );
};

export default ProductForm;
