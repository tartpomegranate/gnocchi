const TabSwitcher = ({ activeTab, setActiveTab }) => {
  const tabClickHandler = (e) => {
    setActiveTab(e.target.id);
  };

  const hoverHandler = (e) => {
    if (e.type === 'mouseenter') {
      e.target.id !== activeTab &&
        e.target.classList.add('bg-sky-300', 'dark:bg-gray-700');
    } else if (e.type === 'mouseleave') {
      e.target.id !== activeTab &&
        e.target.classList.remove('bg-sky-300', 'dark:bg-gray-700');
    }
  };

  const activeTabStyles = 'bg-sky-500 dark:bg-gray-600 shadow-lg';
  const inactiveTabStyles = 'text-black dark:text-white shadow-inner';

  return (
    <div
      className="bg-sky-200 dark:bg-gray-800 text-white m-4 flex justify-center items-center rounded-full text-center font-semibold"
      onClick={tabClickHandler}
    >
      <div
        className={`${
          activeTab === 'todos' ? activeTabStyles : inactiveTabStyles
        } p-2 flex-1 rounded-tl-full rounded-bl-full cursor-pointer transition duration-200`}
        id="todos"
        onMouseEnter={hoverHandler}
        onMouseLeave={hoverHandler}
      >
        Todos
      </div>
      <div
        className={`${
          activeTab === 'notes' ? activeTabStyles : inactiveTabStyles
        } p-2 flex-1 rounded-tr-full rounded-br-full cursor-pointer transition duration-200`}
        id="notes"
        onMouseEnter={hoverHandler}
        onMouseLeave={hoverHandler}
      >
        Notes
      </div>
    </div>
  );
};

export default TabSwitcher;
