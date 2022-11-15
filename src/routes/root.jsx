import { useEffect } from 'react';
import { useDarkMode } from 'usehooks-ts';

import Navbar from '../components/Navbar';

const Root = () => {
  const { isDarkMode, toggle } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else if (!isDarkMode && document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggle} />
    </div>
  );
};

export default Root;
