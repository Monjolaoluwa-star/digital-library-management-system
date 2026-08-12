import { Link } from "react-router-dom";


function BookCard({
  book,
  toggleBorrowStatus,
}) {

  return (

    <div className="book-card">

      <img
        src={book.cover}
        alt={book.title}
        className="book-image"
      />


      <h3 className="book-title">
        {book.title}
      </h3>


      <p className="book-author">
        {book.author}
      </p>


      <span
        className={
          book.status === "Available"
            ? "status available"
            : "status borrowed"
        }
      >
        {book.status}
      </span>


      <p className="book-info">
        {book.genre} • {book.year}
      </p>


      <button
        type="button"
        className={
          book.status === "Available"
            ? "borrow-btn"
            : "borrow-btn return-btn"
        }
        onClick={() =>
          toggleBorrowStatus(book.id)
        }
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