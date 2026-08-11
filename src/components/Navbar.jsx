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

      {/* =========================
          TOP NAVBAR
      ========================== */}
      <div className="top-navbar">

        {/* ReadSphere Logo */}
        <div className="logo">
          <img
            src={logo}
            alt="ReadSphere Logo"
            className="logo-image"
          />
        </div>


        {/* Search Bar */}
        <div className="search-bar">

          {/* Search icon */}
          <FiSearch className="search-icon" />

          {/* Search input */}
          <input
            type="text"
            placeholder="Search books, authors..."
          />

        </div>


        {/* Right-side icons */}
        <div className="nav-icons">

          {/* Favourite books */}
          <FiHeart />

          {/* Notifications */}
          <FiBell />

          {/* Borrowed books / bag */}
          <FiShoppingBag />


          {/* Profile image */}
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="profile"
          />


          {/* Login */}
          <Link
            to="/login"
            className="login-link"
          >
            Login
          </Link>

        </div>

      </div>


      {/* =========================
          BOTTOM NAVBAR
      ========================== */}
      <div className="bottom-navbar">

        <ul className="nav-links">

          {/* Home */}
          <li>
            <Link to="/">
              Home
            </Link>
          </li>


          {/* Browse Books */}
          <li>
            <Link to="/browse">
              Browse
            </Link>
          </li>


          {/* Categories */}
          <li>
            <Link to="/categories">
              Categories
            </Link>
          </li>


          {/* Borrowed Books */}
          <li>
            <Link to="/borrowed">
              Borrowed
            </Link>
          </li>

        </ul>

      </div>

    </header>
  );
}

export default Navbar;