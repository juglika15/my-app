import './profile.css';
import { useTranslations } from 'next-intl';
import { Claims } from '@auth0/nextjs-auth0';

export default function Profile({ user }: { user: Claims | null }) {
  const t = useTranslations('Form');
  return (
    <div className="main dark:bg-orange-300">
      <form className="form dark:bg-cyan-700">
        <img
          className="profile"
          src={user?.picture} // fallback in case user is not loaded
          alt={t('profile')}
          width={150}
          height={150}
        />
        <div className="name">
          <label>
            <span>{t('firstName')}:</span>
            <input
              type="text"
              name="first name"
              value={user?.name?.split(' ')[0]}
              disabled
            />
          </label>
          <label>
            <span>{t('lastName')}:</span>
            <input
              type="text"
              name="last name"
              value={user?.name?.split(' ')[1]}
              disabled
            />
          </label>
        </div>

        <label>
          {t('email')}:
          <input type="email" name="email" value={user?.email} disabled />
        </label>
      </form>
    </div>
  );
}
