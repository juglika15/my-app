import { useTranslations } from 'next-intl';
import Content from './components/Content/content';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return <Content />;
}
