import './App.css';
import Home from "./Pages/Home/Home";
import BookPage from "./Pages/Book Page/Book-Page";
import LiteraturePage from "./Pages/Literature Page/Literature-Page";
import {Route, Routes} from "react-router-dom";
import ScrollToTop from "./Components/Scroll Top/ScrollToTop";

function App() {
  return (
      <>
          <ScrollToTop />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/literature/:categoryName" element={<LiteraturePage />} />
          </Routes>
      </>
  );
}

export default App;
