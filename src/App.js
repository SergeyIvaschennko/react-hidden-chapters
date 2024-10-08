import './App.css';
import Home from "./Pages/Home/Home";
import BookPage from "./Pages/Book Page/Book-Page";
import LiteraturePage from "./Pages/Literature Page/Literature-Page";
import {Route, Routes} from "react-router-dom";
import ScrollToTop from "./Components/Scroll Top/ScrollToTop";
import ShoppingCart from "./Pages/Shopping cart/Shopping-Cart";
import AddForm from "./Pages/Add Form/Add-Form";

function App() {
  return (
      <>
          <ScrollToTop />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/literature/:categoryName" element={<LiteraturePage />} />
              <Route path="/book" element={<BookPage />} />
              <Route path="/shopping-cart" element={<ShoppingCart />} />
              <Route path="/add-book" element={<AddForm />} />
          </Routes>
      </>
  );
}

export default App;
