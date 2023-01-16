import "./App.css";
import HomePage from "./pages/HomePage.js";
import { Routes, Route } from "react-router-dom";
import "bulma/css/bulma.min.css";

function App() {
  return (
    <div className="App">
      {/* <NavBar></NavBar> */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/*Self closing tag*/}
      </Routes>
    </div>
  );
}

export default App;
