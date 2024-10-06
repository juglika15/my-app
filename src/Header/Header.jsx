// import { NavLink } from "react-router-dom";
import Link from "next/link";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Dune</h1>
      <nav>
        <ul>
          <li>
            <Link href="/" className="navlink">
              Home
            </Link>
          </li>
          <li>
            <Link href="/contact" className="navlink">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/blog" className="navlink">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="navlink">
              About
            </Link>
          </li>
          <li>
            <Link href="/profile" className="navlink">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/assignment-3" className="navlink">
              Assignment-3
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
