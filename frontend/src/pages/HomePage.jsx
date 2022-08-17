import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ProductForm from "../components/ProductForm";
import Spinner from "../components/Spinner";
import ProductItem from "../components/ProductItem";

import { getProducts, reset } from "../features/products/productSlice";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    if (isError) {
      console.log(message);
    }

    dispatch(getProducts());

    return () => {
      dispatch(reset());
    };
  }, [user]);

  // navigate, isError, message, dispatch

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name} </h1>
        <p>Products Page</p>
      </section>

      <section style={{width: "100%"}}>
        {products.length > 0 ? (
          <div className="products">
            {products.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <h3>No products found</h3>
        )}
      </section>

      <ProductForm />
    </>
  );
};

export default HomePage;
