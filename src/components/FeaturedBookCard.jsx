import "./FeaturedBookCard.css";
import { Link } from "react-router-dom";

function FeaturedBookCard({ book }) {
  return (
    <div className="book-card">

      {/* BOOK COVER */}
      <div className="book-cover">
        <img
          src={book.image}
          alt={book.title}
        />
      </div>

      {/* BOOK INFORMATION */}
      <div className="book-content">

        <h3>{book.title}</h3>

        <p>{book.author}</p>

        {/* VIEW DETAILS */}
        <Link
          to={`/books/${book.id}`}
          className="featured-details-btn"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default FeaturedBookCard;