import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            <Link to="/about" className="link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/policies" className="link">
              Policies
            </Link>
          </li>
          <li>
            <Link to="/services" className="link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/careers" className="link">
              Careers
            </Link>
          </li>
          <li>
            <Link to="/support" className="link">
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
