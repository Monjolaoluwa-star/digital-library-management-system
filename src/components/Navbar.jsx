import "./Navbar.css";
import logo from "../assets/ReadSpherelogo.png";

import {
  FaSearch,
  FaBell,
  FaBookmark,
  FaUserCircle,
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      {/* Top Row */}
      <div className="navbar-top">

        <div className="empty-space"></div>

        <div className="search-box">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search books, authors..."
          />

        </div>

        <div className="nav-icons">

          <FaBell />

          <FaBookmark />

          <FaUserCircle />

        </div>

      </div>

      {/* Bottom Row */}

      <div className="navbar-bottom">

        <div className="logo">

          <img src={logo} alt="ReadSphere" />

        </div>

        <ul className="nav-links">

          <li>Home</li>

          <li>Browse Books</li>

          <li>Borrowed Books</li>

        </ul>

      </div>

    </header>
  );
}

export default Navbar;