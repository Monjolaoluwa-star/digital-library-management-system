import { Link } from "react-router-dom";
// BookCard receives ONE book object as a prop from BrowseBooks.
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

      {/* Status Badge */}
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

      {/* Button */}

    {/* Borrow / Return Button */}
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