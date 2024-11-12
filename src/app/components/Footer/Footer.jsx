import './Footer.css';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="footer dark:bg-dark">
      <nav>
        <ul>
          <li>
            <Link href="/about" className="link  dark:text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="link  dark:text-white">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/profile" className="link  dark:text-white">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/services" className="link  dark:text-white">
              Services
            </Link>
          </li>
          <li>
            <Link href="/careers" className="link  dark:text-white">
              Careers
            </Link>
          </li>
          <li>
            <Link href="/support" className="link  dark:text-white">
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
