import './contact.css';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('Contact');
  const tForm = useTranslations('Form');

  return (
    <main className="main dark:bg-orange-300">
      <h1>{t('contact')}</h1>
      <p>{t('phone')}: +995 555 123 343</p>
      <p>{t('email')}: contact@dune.com</p>

      <h2>{t('sendUs')}</h2>
      <form className="form dark:bg-cyan-700  ">
        <div className="name">
          <label>
            <span>{tForm('firstName')}:</span>
            <input type="text" name="name" />
          </label>
          <label>
            <span>{tForm('lastName')}:</span>
            <input type="text" name="name" />
          </label>
        </div>
        <label>
          {tForm('email')}:
          <input type="email" name="email" />
        </label>
        <label>
          {tForm('message')}:
          <textarea name="message" placeholder={tForm('write')} />
        </label>
        <button
          type="submit"
          className="button  hover:text-black dark:bg-cyan-600 dark:hover:bg-cyan-950 dark:hover:text-white"
        >
          {tForm('send')}
        </button>
      </form>
    </main>
  );
}
