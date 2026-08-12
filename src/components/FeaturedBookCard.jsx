import "./FeaturedBookCard.css";
import { Link } from "react-router-dom";

function FeaturedBookCard({ book }) {
  return (
    <Link
      to={`/books/${book.id}`}
      className="featured-book-link"
    >
      <article className="featured-book-card">
        <div className="featured-book-cover">
          <img
            src={book.cover}
            alt={book.title}
          />
        </div>

        <div className="featured-book-info">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      </article>
    </Link>
  );
}

export default FeaturedBookCard;