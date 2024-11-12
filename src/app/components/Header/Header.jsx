import Link from 'next/link';
import './Header.css';
import { getSession } from '@auth0/nextjs-auth0';
import Login from '../../login';
import Logout from '../../logout';
import ThemeSwitch from '../ThemeSwitch';

async function Header() {
  const session = await getSession();
  const user = session?.user;

  return (
    <header className="header dark:bg-dark">
      <h1>Dune</h1>
      <div className="nav">
        <nav className="header-nav">
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
              <Link href="/products" className="navlink">
                Products
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
          </ul>
        </nav>
        <div className="logg">
          <ThemeSwitch />

          {user ? (
            <>
              <span className="hello">hello {user.name.split(' ')[0]}</span>{' '}
              <Logout />
            </>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
