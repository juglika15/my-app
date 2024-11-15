import './item.css';
import { useTranslations } from 'next-intl';

interface Items {
  item: {
    name: string;
    description: string;
    img: string;
  };
}

export default function Item({ item }: Items) {
  const t = useTranslations('Content');

  return (
    <div className="item">
      <img src={item.img} alt={item.name} className="item-img" />
      <h4 className="item-name">{item.name}</h4>
      <p className="item-desc">{item.description}</p>
      <button className="button hover:text-black dark:bg-cyan-600 dark:hover:bg-cyan-950 dark:hover:text-white">
        {t('button')}
      </button>
    </div>
  );
}
