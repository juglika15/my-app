import './about.css';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <main className="main dark:bg-orange-300">
      <h2>{t('about')}</h2>
      <p className="info">{t('text')}</p>
    </main>
  );
}
