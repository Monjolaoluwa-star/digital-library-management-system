import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import BookCRUD from "./components/BookCRUD";

// Pages
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>

      {/* Pages WITH Navbar */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

      <Route
        path="/browse"
        element={
          <>
            <Navbar />
            <BrowseBooks />
          </>
        }
      />

      <Route
        path="/books/:id"
        element={
          <>
            <Navbar />
            <BookDetails />
          </>
        }
      />

      {/* Book Management / CRUD */}
      <Route
        path="/book-management"
        element={
          <>
            <Navbar />
            <BookCRUD />
          </>
        }
      />

      {/* Authentication pages WITHOUT Navbar */}
      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;