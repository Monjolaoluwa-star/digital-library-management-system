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

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/browse" element={<BrowseBooks />} />

        <Route path="/books/:id" element={<BookDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;