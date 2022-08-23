import { useSelector } from "react-redux";

import Products from "../components/Products";

const HomePage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className="heading">
        <h1>Welcome {user && user.name} </h1>
      </div>
          <Products />
    </>
  );
};

export default HomePage;
