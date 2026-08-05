import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      {/* Navbar stays visible on every page */}
      <Navbar />

      {/* React Router chooses which page to display */}
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Browse Books Page */}
        <Route
          path="/browse"
          element={<BrowseBooks />}
        />

        {/* Book Details Page */}
        <Route
          path="/books/:id"
          element={<BookDetails />}
        />

        {/* Any unknown URL */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </>
  );
}

export default App;