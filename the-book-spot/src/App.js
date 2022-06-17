import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import FavoriteBooksPage from "./pages/FavoriteBooks/FavoriteBooksPage";
import BestSellersPage from "./pages/BestSellers/BestSellersPage";
import BookDetailsPage from "./pages/BookDetails/BookDetailsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/bestSellers" element={<BestSellersPage />} />
        <Route path="/favoriteBooks" element={<FavoriteBooksPage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
