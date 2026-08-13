import { Link } from "react-router-dom";

function BookCard({
  book,
  toggleBorrowStatus,
}) {
  return (
    <div className="book-card">

      {/* Book Cover */}
      <div className="book-cover">
        <img
          src={book.cover}
          alt={book.title}
        />
      </div>

      {/* Book Information */}
      <div className="book-content">

        <h3>{book.title}</h3>

        <p>
          {book.author}
          <br />
          {book.genre} • {book.year}
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

        {/* Borrow / Return */}
        <button
          type="button"
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

    </div>
  );
}

export default BookCard;