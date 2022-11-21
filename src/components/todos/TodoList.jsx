import { validate as uuidValidate } from 'uuid';
import { Check } from 'phosphor-react';

const TodoList = ({ todos, setTodos }) => {
  const handleCompletedTodo = (e) => {
    const todoId = e.target.parentElement.id;

    if (!uuidValidate(todoId)) {
      return;
    }

    // Loop through todos to return a copy of it with the targeted todo done status changed from false to true
    setTodos(
      todos.map((todo) => (todo.id === todoId ? { ...todo, done: true } : todo))
    );
  };

  const todosElements = todos.map((todo) => (
    <div
      key={todo.id}
      id={todo.id}
      className="flex justify-between items-center dark:bg-gray-800 p-3 rounded-full border-2 dark:border-gray-700"
    >
      <p>{todo.text}</p>
      <Check
        size={32}
        className="p-1 cursor-pointer rounded-full dark:hover:bg-gray-600 hover:bg-gray-300  transition duration-200"
        onClick={handleCompletedTodo}
      />
    </div>
  ));

  return <div className="my-4 p-2 flex flex-col gap-4">{todosElements}</div>;
};

export default TodoList;
