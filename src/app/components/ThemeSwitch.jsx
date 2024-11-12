'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IoIosDesktop } from 'react-icons/io';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const options = {
    light: { label: 'light', icon: <BsSunFill /> },
    dark: { label: 'dark', icon: <FaMoon /> },
    system: { label: 'system', icon: <IoIosDesktop /> },
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2">
        {options[theme].icon} {options[theme].label}
      </button>
      <div className="absolute left-0 pt-2 flex-col gap-2 bg-gray-100 dark:bg-gray-600 p-2 rounded-md shadow-lg group-hover:block hidden ">
        {Object.entries(options).map(([key, { label, icon }]) => (
          <button
            key={key}
            onClick={() => setTheme(key)}
            className="flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-900 p-2 rounded w-40"
          >
            {icon} {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;
