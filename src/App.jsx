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
   Navbar + Page + Footer
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
   NO NAVBAR
   FOOTER ONLY
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
  const [libraryBooks, setLibraryBooks] = useState(books);


  /* ===========================
     BORROW / RETURN
  =========================== */

  const toggleBorrowStatus = (id) => {
    setLibraryBooks((currentBooks) =>
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
      })
    );
  };


  return (
    <>
      <ScrollToTop />

      <Routes>

        {/* =========================
            HOME
        ========================= */}

        <Route
          path="/"
          element={
            <StandardLayout>
              <Home />
            </StandardLayout>
          }
        />


        {/* =========================
            BROWSE
        ========================= */}

        <Route
          path="/browse"
          element={
            <StandardLayout>
              <BrowseBooks
                libraryBooks={libraryBooks}
                toggleBorrowStatus={toggleBorrowStatus}
              />
            </StandardLayout>
          }
        />


        {/* =========================
            BOOK DETAILS
        ========================= */}

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


        {/* =========================
            CATEGORIES
        ========================= */}

        <Route
          path="/categories"
          element={
            <StandardLayout>
              <Categories />
            </StandardLayout>
          }
        />


        {/* =========================
            BORROWED BOOKS
        ========================= */}

        <Route
          path="/borrowed"
          element={
            <StandardLayout>
              <BorrowedBooks
                libraryBooks={libraryBooks}
                toggleBorrowStatus={toggleBorrowStatus}
              />
            </StandardLayout>
          }
        />


        {/* =========================
            TEAMMATE CRUD
            UNTOUCHED
        ========================= */}

        <Route
          path="/book-management"
          element={
            <StandardLayout>
              <BookCRUD />
            </StandardLayout>
          }
        />


        {/* =========================
            LOGIN
            NO NAVBAR
        ========================= */}

        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />


        {/* =========================
            SIGNUP
            NO NAVBAR
        ========================= */}

        <Route
          path="/signup"
          element={
            <AuthLayout>
              <Signup />
            </AuthLayout>
          }
        />


        {/* =========================
            FORGOT PASSWORD
            NO NAVBAR
        ========================= */}

        <Route
          path="/forgot-password"
          element={
            <AuthLayout>
              <ForgotPassword />
            </AuthLayout>
          }
        />


        {/* =========================
            404
        ========================= */}

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