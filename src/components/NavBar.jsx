import Classes from "./NavBar.module.css";
function NavBar() {
  return (
    <nav className={`navbar topNav ${Classes.navbar}`}>
      <div className="navbar-front">
        <div className="navbar-item">
          <a
            className="button is-primary is-small"
            href="https://github.com/Datamosh-js/datamosh"
          >
            Picture Moshpit
          </a>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
