import { Link } from '../../../../i18n/routing';
import './Header.css';
import ThemeSwitch from '../ThemeSwitch';
import { useTranslations } from 'next-intl';
import User from './user';
import LanguageSwitch from '../LanguageSwitch';

function Header() {
  const t = useTranslations('Header');

  return (
    <header className="header dark:bg-dark">
      <h1 className="text-4xl font-bold">Dune</h1>
      <div className="nav">
        <nav className="header-nav">
          <ul>
            <li>
              <Link href="/" className="navlink">
                {t('home')}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="navlink">
                {t('contact')}
              </Link>
            </li>
            <li>
              <Link href="/blog" className="navlink">
                {t('blog')}
              </Link>
            </li>
            <li>
              <Link href="/products" className="navlink">
                {t('products')}
              </Link>
            </li>
            <li>
              <Link href="/about" className="navlink">
                {t('about')}
              </Link>
            </li>
            <li>
              <Link href="/profile" className="navlink">
                {t('profile')}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <LanguageSwitch />
          <ThemeSwitch />
          <User />
        </div>
      </div>
    </header>
  );
}

export default Header;
