import './App.css';
import Home from "./Pages/Home/Home";
import BookPage from "./Pages/Book Page/Book-Page";
import LiteraturePage from "./Pages/Literature Page/Literature-Page";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //     <Home/>
    //     {/*<BookPage/>*/}
    //     {/*<LiteraturePage/>*/}
    // </div>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/literature" element={<LiteraturePage />} />
      </Routes>
  );
}

export default App;
