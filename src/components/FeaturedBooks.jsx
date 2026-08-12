import "./FeaturedBooks.css";
import FeaturedBookCard from "./FeaturedBookCard";
import books from "../data/books";

function FeaturedBooks({ booksToShow }) {
  const featuredBooks = booksToShow || books.slice(3, 13);

  return (
    <section className="featured-books">
      <h2>Featured Books</h2>

      <p>
        Explore our carefully selected collection of books
        across different categories.
      </p>

      <div className="featured-books-grid">
        {featuredBooks.length > 0 ? (
          featuredBooks.map((book) => (
            <FeaturedBookCard
              key={book.id}
              book={book}
            />
          ))
        ) : (
          <div className="featured-empty">
            <h3>No books found 📚</h3>
            <p>
              Try another search or select a different category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedBooks;