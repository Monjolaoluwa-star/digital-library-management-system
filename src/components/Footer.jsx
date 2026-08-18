import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        {/* BRAND */}
        <div className="footer-brand">

          <h2>
            <span className="footer-read">Read</span>
            <span className="footer-sphere">Sphere</span>
          </h2>

          <p>
            Discover, explore, and enjoy books from our digital library.
          </p>

        </div>


        {/* QUICK LINKS */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/browse">Browse Books</Link>

          <Link to="/login">Login</Link>

        </div>


        {/* LIBRARY */}
        <div className="footer-links">

          <h3>Library</h3>

          <Link to="/browse">Explore Books</Link>

          <Link to="/browse">Categories</Link>

          <Link to="/borrowed">Borrowed Books</Link>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 ReadSphere. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
