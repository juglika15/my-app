import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Dune</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="navlink">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navlink">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="navlink">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navlink">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/assignment-3" className="navlink">
              Assignment-3
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
