import { useState } from "react";
import "./BookCRUD.css";

function BookCRUD() {
  const [books, setBooks] = useState([
  {
    id: 1,
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    category: "Fiction",
  },
  {
    id: 2,
    title: "The Pragmatic Programmer",
    author: "David Thomas and Andrew Hunt",
    category: "Programming",
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    category: "Business",
  },
  {
    id: 4,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Business",
  },
  {
    id: 5,
    title: "Educated",
    author: "Tara Westover",
    category: "Biography",
  },
]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim() || !category.trim()) {
      alert("Please fill all fields.");
      return;
    }

    if (editingId !== null) {
      setBooks(
        books.map((book) =>
          book.id === editingId
            ? {
                ...book,
                title: title.trim(),
                author: author.trim(),
                category: category.trim(),
              }
            : book
        )
      );

      setEditingId(null);
    } else {
      const newBook = {
        id: Date.now(),
        title: title.trim(),
        author: author.trim(),
        category: category.trim(),
      };

      setBooks([...books, newBook]);
    }

    setTitle("");
    setAuthor("");
    setCategory("");
  };

  const editBook = (book) => {
    setTitle(book.title);
    setAuthor(book.author);
    setCategory(book.category);
    setEditingId(book.id);
  };

  const deleteBook = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (confirmDelete) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setTitle("");
    setAuthor("");
    setCategory("");
  };

  return (
    <main className="crud-page">
      <div className="crud-container">

        <div className="crud-header">
          <h1>Book Management</h1>
          <p>
            Add, edit and manage books in the ReadSphere library.
          </p>
        </div>

        <form className="crud-form" onSubmit={handleSubmit}>

          <div className="crud-field">
            <label htmlFor="book-title">Book Title</label>
            <input
              id="book-title"
              type="text"
              placeholder="Enter book title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="crud-field">
            <label htmlFor="book-author">Author</label>
            <input
              id="book-author"
              type="text"
              placeholder="Enter author name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="crud-field">
            <label htmlFor="book-category">Category</label>
            <input
              id="book-category"
              type="text"
              placeholder="Enter book category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="crud-form-actions">
            <button type="submit" className="crud-submit-btn">
              {editingId !== null ? "Update Book" : "Add Book"}
            </button>

            {editingId !== null && (
              <button
                type="button"
                className="crud-cancel-btn"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <section className="crud-books-section">
          <div className="crud-section-heading">
            <h2>Books</h2>
            <span>{books.length} books</span>
          </div>

          <div className="crud-books-list">
            {books.map((book) => (
              <article className="crud-book-card" key={book.id}>

                <div className="crud-book-info">
                  <h3>{book.title}</h3>
                  <p>
                    <strong>Author:</strong> {book.author}
                  </p>
                  <p>
                    <strong>Category:</strong> {book.category}
                  </p>
                </div>

                <div className="crud-actions">
                  <button
                    type="button"
                    className="crud-edit-btn"
                    onClick={() => editBook(book)}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className="crud-delete-btn"
                    onClick={() => deleteBook(book.id)}
                  >
                    Delete
                  </button>
                </div>

              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

export default BookCRUD;