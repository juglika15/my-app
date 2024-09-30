import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Dune</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="link">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/books" className="link">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="link">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
