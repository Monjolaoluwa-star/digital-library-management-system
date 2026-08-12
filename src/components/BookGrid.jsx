import "./BookGrid.css";

import { Link } from "react-router-dom";

import books from "../data/books";


function BookGrid({ booksToShow = books }) {

  return (

    <section className="book-grid">

      {booksToShow.length > 0 ? (

        booksToShow.map((book) => (

          <Link
            key={book.id}
            to={`/books/${book.id}`}
            className="book-grid-link"
          >

            <div className="book-grid-item">

              <img
                src={book.cover}
                alt={book.title}
              />

              <h3>{book.title}</h3>

              <p>{book.author}</p>

            </div>

          </Link>

        ))

      ) : (

        <div className="no-books">

          <h2>No books found 📚</h2>

          <p>
            Try another search or select a different category.
          </p>

        </div>

      )}

    </section>
  );
}


export default BookGrid;