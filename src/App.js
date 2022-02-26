import homePhoto from "./KarlieCaleb.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={homePhoto} className="App-logo" alt="logo" />
        <p>Welcome to the #1 Website in the world!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about React
        </a>
      </header>
    </div>
  );
}

export default App;
