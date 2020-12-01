import { useMemo } from 'react';
import './TodoForm.css';

/**
 * @param {string} val 
 */
function transform(val) {
  // traitement long simulé (1s)
  // const start = Date.now();
  // while (start + 1000 > Date.now());

  return val.toUpperCase();
}

export default function TodoForm({
  newTodoInput,
  onNewTodoChange,
  onNewTodoAdd,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    onNewTodoAdd(newTodoInput);
  }
  console.log('render TodoForm');

  const newTodoInputTranform = useMemo(() => transform(newTodoInput), [newTodoInput]);
  // const newTodoInputTranform = transform(newTodoInput);

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={newTodoInputTranform}
        onChange={(event) => onNewTodoChange(event.target.value)}
      />
      <button>+</button>
    </form>
  );
}
