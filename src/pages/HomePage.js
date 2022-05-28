import homePhoto from "../betterPicture.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <header className="App-header">
      <Link to="/congrats">
        <img src={homePhoto} className="App-logo" alt="logo" />
      </Link>
      <p>Welcome to the #1 Website in the world!</p>
      <Link className="App-link" to="/about">
        Click Here to Learn more About Me
      </Link>
    </header>
  );
}
export default HomePage;
