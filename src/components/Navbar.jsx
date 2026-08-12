import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/ReadSpherelogo.png";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FiHeart,
  FiBell,
  FiShoppingBag,
  FiSearch,
} from "react-icons/fi";

function Navbar() {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [liked, setLiked] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();

    const query = searchText.trim();

    if (!query) {
      navigate("/browse");
      return;
    }

    navigate(`/browse?search=${encodeURIComponent(query)}`);
  };

  return (
    <header className="navbar">

      {/* TOP NAVBAR */}
      <div className="top-navbar">

        {/* LOGO */}
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="ReadSphere Logo"
            className="logo-image"
          />
        </Link>

        {/* SEARCH */}
        <form
          className="search-bar"
          onSubmit={handleSearch}
        >
          <FiSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search books, authors..."
            value={searchText}
            onChange={(event) =>
              setSearchText(event.target.value)
            }
          />
        </form>

        {/* NAV ICONS */}
        <div className="nav-icons">

          {/* FAVORITES */}
          <button
            type="button"
            className={`nav-icon-button ${
              liked ? "liked" : ""
            }`}
            onClick={() => setLiked(!liked)}
            aria-label="Favorites"
            title="Favorites"
          >
            <FiHeart />
          </button>

          {/* NOTIFICATIONS */}
          <div className="notification-wrapper">

            <button
              type="button"
              className="nav-icon-button"
              onClick={() =>
                setShowNotifications(!showNotifications)
              }
              aria-label="Notifications"
              title="Notifications"
            >
              <FiBell />
            </button>

            {showNotifications && (
              <div className="notification-dropdown">
                <h4>Notifications</h4>
                <p>You're all caught up.</p>
              </div>
            )}

          </div>

          {/* BORROWED BOOKS */}
          <button
            type="button"
            className="nav-icon-button"
            onClick={() => navigate("/borrowed")}
            aria-label="Borrowed Books"
            title="Borrowed Books"
          >
            <FiShoppingBag />
          </button>

          {/* PROFILE */}
          <button
            type="button"
            className="profile-button"
            onClick={() => navigate("/login")}
            aria-label="Profile"
            title="Profile"
          >
            <img
              src="https://i.pravatar.cc/100"
              alt="Profile"
              className="profile"
            />
          </button>

          {/* LOGIN */}
          <Link
            to="/login"
            className="login-link"
          >
            Login
          </Link>

        </div>
      </div>

      {/* BOTTOM NAVBAR */}
      <div className="bottom-navbar">

        <ul className="nav-links">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/browse">Browse</Link>
          </li>

          <li>
            <Link to="/categories">
              Categories
            </Link>
          </li>

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