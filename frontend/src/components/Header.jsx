import { FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/login">
        <FaSignInAlt /> Login
      </Link>
      <Link to="/register">
        <FaUser /> Register
      </Link>
    </header>
  );
};

export default Header;
