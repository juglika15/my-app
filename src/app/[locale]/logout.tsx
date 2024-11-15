import { useTranslations } from 'next-intl';

export default function Logout() {
  const t = useTranslations('Auth');

  return (
    <button className="log-btn dark:bg-black dark:hover:bg-white">
      <a
        href="/api/auth/logout"
        className="hover:text-white dark:hover:text-black"
      >
        {t('logout')}
      </a>
    </button>
  );
}
