import { useLocalStorage } from 'usehooks-ts';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);

  return (
    <div className="mx-6 p-2">
      <TodoInput setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todos;
