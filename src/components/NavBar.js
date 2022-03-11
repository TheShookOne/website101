import Classes from "./NavBar.module.css";
function NavBar() {
  return (
    <nav className={`navbar topNav ${Classes.navbar}`}>
      <div className="navbar-front">
        <div className="navbar-item">
          <a
            className="button is-danger is-small"
            href="https://www.youtube.com/watch?v=zL19uMsnpSU"
          >
            Don't Click Me
          </a>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
