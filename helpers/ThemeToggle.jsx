"use client"
import React, { useEffect, useState } from 'react';
import { MoonIcon,SunIcon } from '@heroicons/react/24/solid'

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    
      if (isDarkMode) {
        body.classList.add('dark');
      } else {
        body.classList.remove('dark');
      }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button className="px-4 py-2 duration-500" onClick={toggleTheme}>
      {isDarkMode ? <MoonIcon className='h-6 w-6 text-yellow-500 fill-yellow-500' /> : <SunIcon className='h-6 w-6 text-black' />}
    </button>
  );
};

export default ThemeToggle;