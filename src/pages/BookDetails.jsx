import { useParams, Link } from "react-router-dom";

import books from "../data/books";


function BookDetails({ libraryBooks = books }) {

  const { id } = useParams();


  const book = libraryBooks.find(
    (item) => item.id === Number(id)
  );


  if (!book) {

    return (

      <main className="book-details not-found-details">

        <h1>Book Not Found</h1>

        <p>
          Sorry, we couldn't find the book you're looking for.
        </p>

        <Link
          to="/browse"
          className="details-btn"
        >
          Back to Browse
        </Link>

      </main>
    );
  }


  return (

    <main className="book-details">

      <img
        src={book.cover}
        alt={book.title}
        className="details-image"
      />


      <div className="details-content">

        <h1>{book.title}</h1>

        <p>
          <strong>Author:</strong>{" "}
          {book.author}
        </p>

        <p>
          <strong>Genre:</strong>{" "}
          {book.genre}
        </p>

        <p>
          <strong>Published:</strong>{" "}
          {book.year}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          {book.status}
        </p>


        <Link
          to="/browse"
          className="details-btn"
        >
          Back to Browse
        </Link>

      </div>

    </main>
  );
}


export default BookDetails;