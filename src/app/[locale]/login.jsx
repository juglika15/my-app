import { useTranslations } from 'next-intl';

export default function Login() {
  const t = useTranslations('Auth');

  return (
    <button className="log-btn dark:bg-dark">
      <a
        href="/api/auth/login"
        className="hover:text-white dark:hover:text-black"
      >
        {t('login')}
      </a>
    </button>
  );
}
