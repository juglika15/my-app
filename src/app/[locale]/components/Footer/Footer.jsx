import './Footer.css';
import { Link } from '../../../../i18n/routing';
import { useTranslations } from 'next-intl';

function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="footer dark:bg-dark">
      <nav>
        <ul>
          <li>
            <Link href="/about" className="link  dark:text-white">
              {t('about')}
            </Link>
          </li>
          <li>
            <Link href="/contact" className="link  dark:text-white">
              {t('contact')}
            </Link>
          </li>
          <li>
            <Link href="/profile" className="link  dark:text-white">
              {t('profile')}
            </Link>
          </li>
          <li>
            <Link href="/services" className="link  dark:text-white">
              {t('services')}
            </Link>
          </li>
          <li>
            <Link href="/careers" className="link  dark:text-white">
              {t('careers')}
            </Link>
          </li>
          <li>
            <Link href="/support" className="link  dark:text-white">
              {t('support')}
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
