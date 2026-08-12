import { Link } from "react-router-dom";
import books from "../data/books";
import "./Categories.css";

function Categories() {
  const categories = [...new Set(books.map((book) => book.genre))];

  return (
    <main className="categories-page">
      <div className="categories-header">
        <h1>Book Categories</h1>
        <p>Explore books by genre and discover your next great read.</p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => {
          const categoryBooks = books.filter(
            (book) => book.genre === category
          );

          return (
            <section className="category-card" key={category}>
              <h2>{category}</h2>

              <p>
                {categoryBooks.length}{" "}
                {categoryBooks.length === 1 ? "book" : "books"}
              </p>

              <div className="category-books">
                {categoryBooks.map((book) => (
                  <Link
                    to={`/books/${book.id}`}
                    className="category-book"
                    key={book.id}
                  >
                    <img src={book.cover} alt={book.title} />

                    <div>
                      <h3>{book.title}</h3>
                      <p>{book.author}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}

export default Categories;