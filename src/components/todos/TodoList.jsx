import { validate as uuidValidate } from 'uuid';
import { Check, ArrowUUpLeft } from 'phosphor-react';
import { arraySplit } from '../../utils/array-split';

const TodoList = ({ todos, setTodos }) => {
  const handleTodoStatusChange = (e) => {
    const todoId = e.currentTarget.parentElement.getAttribute('data-id');
    if (!uuidValidate(todoId)) {
      return;
    }

    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          todo.done = !todo.done;
        }

        return todo;
      })
    );
  };

  let [uncompletedTodos, completedTodos] = arraySplit(
    todos,
    (todo) => !todo.done
  );

  const uncompletedTodosElements = uncompletedTodos.map((todo) => (
    <div
      key={todo.id}
      data-id={todo.id}
      className="mb-2 last:mb-0 flex justify-between items-center dark:bg-gray-800 p-3 rounded-full border-2 dark:border-gray-700"
    >
      <p>{todo.text}</p>
      <Check
        size={32}
        className="p-1 cursor-pointer rounded-full dark:hover:bg-gray-600 hover:bg-gray-300  transition duration-200"
        onClick={handleTodoStatusChange}
      />
    </div>
  ));

  const completedTodosElements = completedTodos.map((todo) => (
    <div
      key={todo.id}
      data-id={todo.id}
      className="mb-2 last:mb-0 flex justify-between items-center dark:bg-gray-800/50 p-3 rounded-full border-2 dark:border-gray-700"
    >
      <p className="line-through opacity-50">{todo.text}</p>
      <ArrowUUpLeft
        size={32}
        className="p-1 cursor-pointer rounded-full dark:hover:bg-gray-600 hover:bg-gray-300  transition duration-200"
        onClick={handleTodoStatusChange}
      />
    </div>
  ));

  return (
    <div className="pb-4 md:w-2/3">
      {uncompletedTodos.length !== 0 && (
        <div className="flex flex-col gap-2 pb-4 md:block md:columns-2">
          {uncompletedTodosElements}
        </div>
      )}

      {completedTodos.length !== 0 && (
        <div className="flex flex-col gap-2 pt-4 border-t-2 dark:border-gray-800 md:block md:columns-2">
          {completedTodosElements}
        </div>
      )}
    </div>
  );
};

export default TodoList;
