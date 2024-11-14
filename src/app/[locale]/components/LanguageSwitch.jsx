'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const initialLocale = pathname.split('/')[1] || 'en';
  const [locale, setLocale] = useState(initialLocale);

  useEffect(() => {
    setLocale(initialLocale);
  }, [pathname]);

  const handleLocaleChange = (e) => {
    const newLocale = e.target.value;
    setLocale(newLocale);
    router.push(`/${newLocale}${pathname.slice(3)}`);
    localStorage.setItem('preferredLocale', newLocale);
  };

  return (
    <select
      value={locale}
      onChange={handleLocaleChange}
      className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900
       dark:text-gray-100  rounded-lg outline-none transition duration-200 ease-in-out p-2"
    >
      <option value="en">Eng</option>
      <option value="ka">ქარ</option>
    </select>
  );
}
