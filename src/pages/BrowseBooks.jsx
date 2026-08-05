import { useState } from "react";
import books from "../data/books";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import SortDropdown from "../components/SortDropdown";

function BrowseBooks() {

  // Create a copy of our books that React can update.
  const [libraryBooks, setLibraryBooks] = useState(books);
  // React remembers what the user types
  const [searchText, setSearchText] = useState("");

  // React remembers the selected genre
  const [selectedGenre, setSelectedGenre] = useState("All");

  // React remembers how the user wants the books sorted
  const [sortOption, setSortOption] = useState("A-Z");

   const toggleBorrowStatus = (id) => {

    // Update the books array
    setLibraryBooks(

      // Loop through every book
      libraryBooks.map((book) => {

        // If this is NOT the clicked book,
        // leave it exactly as it is.
        if (book.id !== id) {
          return book;
        }

        // Otherwise create a NEW version
        // of the clicked book.
        return {

          // Copy everything from the old book.
          ...book,

          // Change ONLY the status.
          status:
            book.status === "Available"
              ? "Borrowed"
              : "Available"

        };

      })

    );

  };

  const filteredBooks = libraryBooks.filter((book) => {

  // Convert the search text to lowercase
  const search = searchText.toLowerCase();

  // Check if the book title or author matches the search
  const matchesSearch =
    book.title.toLowerCase().includes(search) ||
    book.author.toLowerCase().includes(search);

  // Check if the genre matches
  const matchesGenre =
    selectedGenre === "All" ||
    book.genre === selectedGenre;

  // Keep the book only if both conditions are true
  return matchesSearch && matchesGenre;
});

// Create a copy of the filtered books before sorting.
// We use [...filteredBooks] so we don't change the original array.
const sortedBooks = [...filteredBooks];

if (sortOption === "A-Z") {
  sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
}

if (sortOption === "Z-A") {
  sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
}

if (sortOption === "Newest") {
  sortedBooks.sort((a, b) => b.year - a.year);
}

if (sortOption === "Oldest") {
  sortedBooks.sort((a, b) => a.year - b.year);
}

  return (
    <main className="browse-books">

    <div className="browse-header">

  <div>

    <h1 className="browse-title">
      Browse Books
    </h1>

    <p className="browse-subtitle">
      Discover books across different genres, search by title or author, and explore your next great read.
    </p>

  </div>

  <div className="book-count">

    {sortedBooks.length}

    {sortedBooks.length === 1 ? " Book" : " Books"}

  </div>

</div>

  <div className="controls">

  <SearchBar
    searchText={searchText}
    setSearchText={setSearchText}
  />

  <FilterPanel
    selectedGenre={selectedGenre}
    setSelectedGenre={setSelectedGenre}
  />

   <SortDropdown
    sortOption={sortOption}
    setSortOption={setSortOption}
  />

  </div>

      <div className="books-grid">

      {sortedBooks.length > 0 ? (

     sortedBooks.map((book) => (
      <BookCard
        key={book.id}
        book={book}
        toggleBorrowStatus={toggleBorrowStatus}
      />
    ))

  ) : (

    <div className="no-books">

      <h2>No books found 📚</h2>

      <p>
        Try searching for another title or choose a different genre.
      </p>

    </div>

  )}

</div>
    </main>
  );
}

export default BrowseBooks;