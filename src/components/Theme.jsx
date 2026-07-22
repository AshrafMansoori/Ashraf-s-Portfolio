import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldUseDark = savedTheme ? savedTheme === 'dark' : prefersDark;

        setIsDarkMode(shouldUseDark);
        document.documentElement.classList.toggle('dark', shouldUseDark);
        document.documentElement.style.colorScheme = shouldUseDark ? 'dark' : 'light';
    }, []);

    const toggleTheme = () => {
        const nextMode = !isDarkMode;
        setIsDarkMode(nextMode);
        document.documentElement.classList.toggle('dark', nextMode);
        document.documentElement.style.colorScheme = nextMode ? 'dark' : 'light';
        localStorage.setItem('theme', nextMode ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-full transition-all duration-300 flex items-center justify-center bg-gray-200 text-yellow-500 hover:bg-gray-300 dark:bg-[#0c162d] dark:text-[#38bdf8] dark:hover:bg-[#1a2c56] dark:border dark:border-[#38bdf8]"
        >
            {isDarkMode ? <FaMoon className="text-xl" /> : <FaSun className="text-xl" />}
        </button>
    );
};

export default ThemeToggle;