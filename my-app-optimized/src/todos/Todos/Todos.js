import { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

export default function Todos() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState(
    new Array(2000).fill({ text: 'ABC' }).map((t) => ({
      ...t,
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    })),
  );

  return (
    <div className="Todos">
      <TodoForm newTodoInput={newTodo} onNewTodoChange={(v) => setNewTodo(v)} onNewTodoAdd={(v) => setTodos([...todos, {text:v, id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),}])} />
      <TodoList items={todos} />
    </div>
  );
}
