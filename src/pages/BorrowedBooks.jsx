import { Link } from "react-router-dom";

function BorrowedBooks({
  libraryBooks = [],
  toggleBorrowStatus,
}) {
  const borrowedBooks =
    libraryBooks.filter(
      (book) => book.status === "Borrowed"
    );

  return (
    <main className="browse-books">

      <div className="browse-header">

        <div>
          <h1 className="browse-title">
            Borrowed Books
          </h1>

          <p className="browse-subtitle">
            Books you have currently borrowed
            from ReadSphere.
          </p>
        </div>

        <div className="book-count">
          {borrowedBooks.length} Borrowed
        </div>

      </div>

      {borrowedBooks.length === 0 ? (
        <div className="no-books">
          <h2>No borrowed books 📚</h2>

          <p>
            You currently have no borrowed books.
          </p>

          <Link
            to="/browse"
            className="details-btn"
            style={{
              maxWidth: "220px",
              margin: "20px auto",
            }}
          >
            Browse Books
          </Link>
        </div>
      ) : (
        <div className="books-grid">

          {borrowedBooks.map((book) => (
            <div
              className="book-card"
              key={book.id}
            >

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

              <span className="status borrowed">
                Borrowed
              </span>

              <button
                className="borrow-btn return-btn"
                onClick={() =>
                  toggleBorrowStatus(
                    book.id
                  )
                }
              >
                Return Book
              </button>

              <Link
                to={`/books/${book.id}`}
                className="details-btn"
              >
                View Details
              </Link>

            </div>
          ))}

        </div>
      )}

    </main>
  );
}

export default BorrowedBooks;