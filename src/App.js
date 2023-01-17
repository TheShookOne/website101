import "./App.css";
import HomePage from "./pages/HomePage.js";
import Cuisine from "./pages/Cuisine";
import Searched from "./components/Searched";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bulma/css/bulma.min.css";

function App() {
  return (
    <div className="App">
      {/* <NavBar></NavBar> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
