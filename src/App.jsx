import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookCRUD from "./components/BookCRUD";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import Categories from "./pages/Categories";
import BorrowedBooks from "./pages/BorrowedBooks";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";

import books from "./data/books";


/* ===========================
   STANDARD LAYOUT
=========================== */

function StandardLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="page-content">
        {children}
      </main>

      <Footer />
    </>
  );
}


/* ===========================
   AUTH LAYOUT
=========================== */

function AuthLayout({ children }) {
  return (
    <>
      <main className="auth-page-content">
        {children}
      </main>

      <Footer />
    </>
  );
}


/* ===========================
   APP
=========================== */

function App() {

  const [libraryBooks, setLibraryBooks] = useState(() => {

    const savedBooks =
      localStorage.getItem("readsphereBooks");

    if (savedBooks) {
      return JSON.parse(savedBooks);
    }

    return books;
  });


  /* ===========================
     BORROW / RETURN
  =========================== */

  const toggleBorrowStatus = (id) => {

    setLibraryBooks((currentBooks) => {

      const updatedBooks =
        currentBooks.map((book) => {

          if (book.id !== id) {
            return book;
          }

          return {
            ...book,

            status:
              book.status === "Available"
                ? "Borrowed"
                : "Available",
          };

        });


      localStorage.setItem(
        "readsphereBooks",
        JSON.stringify(updatedBooks)
      );


      return updatedBooks;

    });

  };


  return (
    <>
      <ScrollToTop />

      <Routes>

        <Route
          path="/"
          element={
            <StandardLayout>
              <Home />
            </StandardLayout>
          }
        />


        <Route
          path="/browse"
          element={
            <StandardLayout>
              <BrowseBooks
                libraryBooks={libraryBooks}
                toggleBorrowStatus={
                  toggleBorrowStatus
                }
              />
            </StandardLayout>
          }
        />


        <Route
          path="/books/:id"
          element={
            <StandardLayout>
              <BookDetails
                libraryBooks={libraryBooks}
              />
            </StandardLayout>
          }
        />


        <Route
          path="/categories"
          element={
            <StandardLayout>
              <Categories />
            </StandardLayout>
          }
        />


        <Route
          path="/borrowed"
          element={
            <StandardLayout>
              <BorrowedBooks
                libraryBooks={libraryBooks}
                toggleBorrowStatus={
                  toggleBorrowStatus
                }
              />
            </StandardLayout>
          }
        />


        <Route
          path="/book-management"
          element={
            <StandardLayout>
              <BookCRUD />
            </StandardLayout>
          }
        />


        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />


        <Route
          path="/signup"
          element={
            <AuthLayout>
              <Signup />
            </AuthLayout>
          }
        />


        <Route
          path="/forgot-password"
          element={
            <AuthLayout>
              <ForgotPassword />
            </AuthLayout>
          }
        />


        <Route
          path="*"
          element={
            <StandardLayout>
              <NotFound />
            </StandardLayout>
          }
        />

      </Routes>
    </>
  );
}


export default App;