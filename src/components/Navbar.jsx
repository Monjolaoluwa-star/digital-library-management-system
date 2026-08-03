import "./Navbar.css";
import logo from "../assets/ReadSpherelogo.png";

function Navbar() {
  return (
   <nav className="navbar">
  <div className="logo">
    <img src={logo} alt="ReadSphere Logo" />
  </div>

  <input
    type="text"
    placeholder="Search books, authors..."
    className="search-bar"
  />

  <ul className="nav-links">
    <li>Home</li>
    <li>Browse</li>
    <li>Categories</li>
    <li>Borrowed</li>
    <li>About</li>
    <li>Contact</li>
  </ul>

  <div className="nav-icons">
    <span>🔔</span>
    <span>🌐</span>
    <span>👤</span>
  </div>
</nav>
  );
}

export default Navbar;