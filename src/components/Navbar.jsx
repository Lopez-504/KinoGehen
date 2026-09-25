import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/KinoGehen">🎬 KinoGehen</Link>
      </div>

      <div className="navbar-links">
        <Link to="/movies">Movies</Link>
        <Link to="/directors">Directors</Link>
        <Link to="/actors">Actors / Actresses</Link>
        <Link to="/quotes">Quotes</Link>
      </div>
    </nav>
  );
}

export default Navbar;