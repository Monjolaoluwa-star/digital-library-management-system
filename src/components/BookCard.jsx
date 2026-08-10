import { Link } from "react-router-dom";

function BookCard({ book, toggleBorrowStatus }) {
  return (
    <div className="book-card">

      {/* Book Cover */}
      <img
        src={book.cover}
        alt={book.title}
        className="book-image"
      />

      {/* Book Title */}
      <h3 className="book-title">
        {book.title}
      </h3>

      {/* Author */}
      <p className="book-author">
        {book.author}
      </p>

      {/* Status */}
      <span
        className={
          book.status === "Available"
            ? "status available"
            : "status borrowed"
        }
      >
        {book.status}
      </span>

      {/* Genre and Year */}
      <p className="book-info">
        {book.genre} • {book.year}
      </p>

      {/* Borrow / Return */}
      <button
        className={
          book.status === "Available"
            ? "borrow-btn"
            : "borrow-btn return-btn"
        }
        onClick={() => toggleBorrowStatus(book.id)}
      >
        {book.status === "Available"
          ? "Borrow Book"
          : "Return Book"}
      </button>

      {/* View Details */}
      <Link
        to={`/books/${book.id}`}
        className="details-btn"
      >
        View Details
      </Link>

    </div>
  );
}

export default BookCard;