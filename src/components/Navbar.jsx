import "./Navbar.css";
import logo from "../assets/ReadSpherelogo.png";
import { Link } from "react-router-dom";
import {
  FiHeart,
  FiBell,
  FiShoppingBag,
  FiSearch,
} from "react-icons/fi";

function Navbar() {
  return (
    <header className="navbar">

      {/* TOP BAR */}
      <div className="top-navbar">

        <div className="logo">
          <img
            src={logo}
            alt="ReadSphere Logo"
            className="logo-image"
          />
        </div>

        <div className="search-bar">
          <FiSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search books, authors..."
          />
        </div>

        <div className="nav-icons">

          <FiHeart />
          <FiBell />
          <FiShoppingBag />

          {/* Profile Image */}
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="profile"
          />

          {/* Login Button */}
          <Link to="/login" className="login-link">
            Login
          </Link>

        </div>

      </div>


      {/* BOTTOM BAR */}
      <div className="bottom-navbar">

        <ul className="nav-links">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/browse">Browse</Link>
          </li>

          <li>
            <Link to="/categories">Categories</Link>
          </li>

          <li>
            <Link to="/borrowed">Borrowed</Link>
          </li>

        </ul>

      </div>

    </header>
  );
}

export default Navbar;