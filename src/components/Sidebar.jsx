import "./Sidebar.css";
import { FaSearch } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-search">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search books, authors..." />
      </div>

      <div className="sidebar-section">
        <h4>Book Categories</h4>

        <label><input type="checkbox" /> Programming</label>
        <label><input type="checkbox" /> Computer</label>
        <label><input type="checkbox" /> Science</label>
        <label><input type="checkbox" /> Business</label>
        <label><input type="checkbox" /> History</label>
        <label><input type="checkbox" /> Biography</label>
        <label><input type="checkbox" /> Fiction</label>
        <label><input type="checkbox" /> Education</label>
      </div>

      <div className="sidebar-section">
        <h4>New Books Categories</h4>

        <label><input type="checkbox" /> Classics</label>
        <label><input type="checkbox" /> Nigerian</label>
        <label><input type="checkbox" /> Business</label>
        <label><input type="checkbox" /> Technology</label>
        <label><input type="checkbox" /> Mystery</label>
        <label><input type="checkbox" /> Fantasy</label>
        <label><input type="checkbox" /> History</label>
        <label><input type="checkbox" /> Biography</label>
      </div>

    </aside>
  );
}

export default Sidebar;