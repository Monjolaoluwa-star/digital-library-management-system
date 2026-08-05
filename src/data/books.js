// This array stores all the books.
// Each object represents ONE book.

const books = [
  {
    id: 1,
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Productivity",
    year: 2016,
    status: "Available",
    cover: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg"
  },

  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self Help",
    year: 2018,
    status: "Borrowed",
    cover: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
  },

  {
    id: 3,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    year: 2008,
    status: "Available",
    cover: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg"
  }
];

// Makes the array available to other files.
export default books;