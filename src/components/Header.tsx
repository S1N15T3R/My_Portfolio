import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Abdul Motalib Samir</h1>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#blog" className="hover:text-blue-500">Blog</a></li>
          <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
          <li><a href="#achievements" className="hover:text-blue-500">Achievements</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
        <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;