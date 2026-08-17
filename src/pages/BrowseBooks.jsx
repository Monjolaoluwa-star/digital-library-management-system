import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import BookCard from "../components/BookCard";
import FilterPanel from "../components/FilterPanel";
import SortDropdown from "../components/SortDropdown";
import Sidebar from "../components/Sidebar";

import books from "../data/books";
import { searchBooks } from "../api";

function BrowseBooks({
  libraryBooks = books,
  toggleBorrowStatus,
}) {
  const [searchParams] = useSearchParams();

  const initialSearch =
    searchParams.get("search") || "";

  const [searchText, setSearchText] =
    useState(initialSearch);

  const [selectedCategories, setSelectedCategories] =
    useState([]);

  const [selectedGenre, setSelectedGenre] =
    useState("");

  const [sortOption, setSortOption] =
    useState("default");

  const [apiBooks, setApiBooks] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [apiError, setApiError] =
    useState("");


  /* =========================
     OPEN LIBRARY API
  ========================= */

  useEffect(() => {

    const fetchBooks = async () => {

      if (!searchText.trim()) {
        setApiBooks([]);
        setApiError("");
        return;
      }

      setLoading(true);
      setApiError("");

      try {

        const results =
          await searchBooks(searchText);

        const formattedBooks =
          results.map((book, index) => ({
            id: `api-${book.key}-${index}`,

            title:
              book.title ||
              "Unknown Title",

            author:
              book.author_name?.[0] ||
              "Unknown Author",

            genre:
              book.subject?.[0] ||
              "Unknown",

            year:
              book.first_publish_year ||
              "Unknown",

            status: "Available",

            cover: book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              : "https://via.placeholder.com/150x220?text=No+Cover",
          }));

        setApiBooks(formattedBooks);

      } catch (error) {

        console.error(
          "Failed to fetch books:",
          error
        );

        setApiError(
          "Unable to load books. Please try again."
        );

        setApiBooks([]);

      } finally {

        setLoading(false);

      }
    };

    fetchBooks();

  }, [searchText]);


  /* =========================
     DISPLAYED BOOKS
  ========================= */

  const displayedBooks = useMemo(() => {

    let result = searchText.trim()
      ? [...apiBooks]
      : [...libraryBooks];


    const search =
      searchText
        .toLowerCase()
        .trim();


    /* SEARCH */

    if (!searchText.trim()) {

      if (search) {

        result = result.filter(
          (book) =>
            book.title
              .toLowerCase()
              .includes(search) ||
            book.author
              .toLowerCase()
              .includes(search)
        );

      }

    }


    /* SIDEBAR CATEGORY FILTER */

    if (
      selectedCategories.length > 0
    ) {

      result = result.filter(
        (book) =>
          selectedCategories.includes(
            book.genre
          )
      );

    }


    /* DROPDOWN GENRE FILTER */

    if (selectedGenre) {

      result = result.filter(
        (book) =>
          book.genre === selectedGenre
      );

    }


    /* SORTING */

    if (
      sortOption === "title-asc"
    ) {

      result.sort((a, b) =>
        a.title.localeCompare(
          b.title
        )
      );

    }

    if (
      sortOption === "title-desc"
    ) {

      result.sort((a, b) =>
        b.title.localeCompare(
          a.title
        )
      );

    }

    if (
      sortOption === "year-new"
    ) {

      result.sort(
        (a, b) =>
          Number(b.year) -
          Number(a.year)
      );

    }

    if (
      sortOption === "year-old"
    ) {

      result.sort(
        (a, b) =>
          Number(a.year) -
          Number(b.year)
      );

    }

    return result;

  }, [
    libraryBooks,
    apiBooks,
    searchText,
    selectedCategories,
    selectedGenre,
    sortOption,
  ]);


  return (

    <main className="browse-books">

      <div className="browse-layout">


        {/* SIDEBAR */}

        <div className="browse-sidebar">

          <Sidebar
            selectedCategories={
              selectedCategories
            }

            setSelectedCategories={
              setSelectedCategories
            }

            searchText={
              searchText
            }

            setSearchText={
              setSearchText
            }
          />

        </div>


        {/* MAIN CONTENT */}

        <div className="browse-content">


          {/* HEADER */}

          <div className="browse-header">

            <div>

              <h1 className="browse-title">
                Browse Books
              </h1>

              <p className="browse-subtitle">
                Discover books from different
                authors, genres and categories.
              </p>

            </div>


            <div className="book-count">

              {loading
                ? "Searching..."
                : `${displayedBooks.length}${
                    displayedBooks.length === 1
                      ? " Book"
                      : " Books"
                  }`
              }

            </div>

          </div>


          {/* API ERROR */}

          {apiError && (

            <div className="no-books">

              <h2>
                Something went wrong
              </h2>

              <p>
                {apiError}
              </p>

            </div>

          )}


          {/* CONTROLS */}

          <div className="controls">

            <FilterPanel
              selectedGenre={
                selectedGenre
              }

              setSelectedGenre={
                setSelectedGenre
              }
            />

            <SortDropdown
              sortOption={
                sortOption
              }

              setSortOption={
                setSortOption
              }
            />

          </div>


          {/* BOOK GRID */}

          <div className="books-grid">

            {loading ? (

              <div className="no-books">

                <h2>
                  Searching books...
                </h2>

                <p>
                  Please wait while we
                  find books for you.
                </p>

              </div>

            ) : displayedBooks.length > 0 ? (

              displayedBooks.map(
                (book) => (

                  <BookCard
                    key={book.id}
                    book={book}
                    toggleBorrowStatus={
                      toggleBorrowStatus
                    }
                  />

                )
              )

            ) : (

              <div className="no-books">

                <h2>
                  No books found 📚
                </h2>

                <p>
                  Try searching for another
                  title or choose a different
                  category.
                </p>

              </div>

            )}

          </div>

        </div>

      </div>

    </main>

  );

}

export default BrowseBooks;