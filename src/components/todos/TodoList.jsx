const TodoList = ({ todos }) => {
  const todosElements = todos.map((todo) => (
    <div className="dark:bg-gray-800 p-3 rounded-full border-2 dark:border-gray-700">
      {todo}
    </div>
  ));

  return <div className="my-4 p-2 flex flex-col gap-4">{todosElements}</div>;
};

export default TodoList;
