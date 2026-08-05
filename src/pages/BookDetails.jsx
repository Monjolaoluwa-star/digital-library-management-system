import { useParams } from "react-router-dom";
import books from "../data/books";

function BookDetails() {

  // Read the id from the URL
  const { id } = useParams();

  // Find the matching book
  const book = books.find((book) => book.id === Number(id));

  // If no book matches the URL, show a friendly message.
 if (!book) {
  return (
    <main className="book-details">
      <h1>Book Not Found</h1>
      <p>
        Sorry, we couldn't find the book you're looking for.
      </p>
    </main>
  );
}  

  return (

    <main className="book-details">

      {/* Book Cover */}
      <img
        src={book.cover}
        alt={book.title}
        className="details-image"
      />

      {/* Book Information */}
      <div className="details-content">

        <h1>{book.title}</h1>

        <p>
          <strong>Author:</strong> {book.author}
        </p>

        <p>
          <strong>Genre:</strong> {book.genre}
        </p>

        <p>
          <strong>Published:</strong> {book.year}
        </p>

        <p>
          <strong>Status:</strong> {book.status}
        </p>

      </div>

    </main>

  );
}
export default BookDetails;