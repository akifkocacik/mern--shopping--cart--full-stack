import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const onLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="header">
      <Link to="/">Home</Link>
      {user ? (
        <>
          <button className="btn" onClick={onLogout}>
            <FaSignOutAlt /> Logout
          </button>
          <Link to="/cart">
            <AiOutlineShoppingCart />
            <span> {totalQuantity} </span>
          </Link>
        </>
      ) : (
        <>
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
          <Link to="/register">
            <FaUser /> Register
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
