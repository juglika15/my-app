'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

type Locale = 'en' | 'ka';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const initialLocale = (pathname.split('/')[1] || 'en') as Locale;
  const [locale, setLocale] = useState<Locale>(initialLocale);

  useEffect(() => {
    setLocale(initialLocale);
  }, [pathname]);

  const options = {
    en: {
      label: 'Eng',
      icon: (
        <span role="img" aria-label="English">
          🇬🇧
        </span>
      ),
    },
    ka: {
      label: 'ქარ',
      icon: (
        <span role="img" aria-label="Georgian">
          🇬🇪
        </span>
      ),
    },
  };

  const handleLocaleChange = (localeKey: 'en' | 'ka') => {
    if (localeKey === locale) return;
    setLocale(localeKey);
    router.push(`/${localeKey}${pathname.slice(3)}`);
    localStorage.setItem('preferredLocale', localeKey);
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg outline-none transition duration-200 ease-in-out p-2">
        {options[locale].icon} {options[locale].label}
      </button>

      <div className="absolute left-0 pt-2  flex-col gap-2 bg-gray-100 dark:bg-gray-600 p-2 rounded-md shadow-lg hidden group-hover:block ">
        {Object.entries(options).map(([key, { label, icon }]) => (
          <button
            key={key}
            onClick={() => {
              handleLocaleChange(key as Locale);
            }}
            className={`flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-900 p-2 rounded w-40 ${
              locale === key ? 'bg-gray-200 dark:bg-gray-900' : ''
            }`}
          >
            {icon} {label}
          </button>
        ))}
      </div>
    </div>
  );
}
