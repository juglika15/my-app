import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Dune</h1>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#cast">Cast</a>
          </li>
          <li>
            <a href="#books">Books</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
