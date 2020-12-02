import './TodoForm.css';

export default function TodoForm({
  newTodoInput,
  onNewTodoChange,
  onNewTodoAdd,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    onNewTodoAdd(newTodoInput);
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={newTodoInput}
        onChange={(event) => onNewTodoChange(event.target.value)}
      />
      <button>+</button>
    </form>
  );
}

// export default function TodoForm({
//   // newTodoInput,
//   // onNewTodoChange,
//   // onNewTodoAdd,
// }) {
//   const newTodoInput = useSelector(selectTodosInput);

//   const dispatch = useDispatch();

//   function handleSubmit(event) {
//     event.preventDefault();
//     dispatch(todoAdd(newTodoInput));
//   }
//   return (
//     <form className="TodoForm" onSubmit={handleSubmit}>
//       <input
//         value={newTodoInput}
//         onChange={(event) => onNewTodoChange(event.target.value)}
//       />
//       <button>+</button>
//     </form>
//   );
// }
