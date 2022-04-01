import "./App.css";
import HomePage from "./pages/HomePage.js";
import AboutMe from "./pages/AboutMe.js";
import Congratulations from "./pages/Congratulations";
import { Routes, Route } from "react-router-dom";
import "bulma/css/bulma.min.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/*Self closing tag*/}
        <Route path="/about" element={<AboutMe />} />
        <Route path="/congrats" element={<Congratulations />} />
      </Routes>
    </div>
  );
}

export default App;
