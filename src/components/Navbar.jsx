import { Link } from 'react-router-dom';
import { Moon } from 'phosphor-react';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="p-6 flex justify-between items-center dark:bg-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold">Gnocchi</h1>

      <Moon
        size={32}
        weight={isDarkMode ? 'fill' : 'regular'}
        onClick={toggleDarkMode}
        className="p-1 cursor-pointer rounded-full dark:hover:bg-gray-600 hover:bg-gray-300  transition duration-200"
      />
    </nav>
  );
};

export default Navbar;
