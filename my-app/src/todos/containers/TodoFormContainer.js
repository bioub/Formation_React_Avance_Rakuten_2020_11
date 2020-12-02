// import { connect } from 'react-redux';

import { useDispatch, useSelector } from 'react-redux';
import TodoForm from '../components/TodoForm/TodoForm';

import { todoAdd, todoChange } from '../actions';
import { selectTodosInput } from '../selectors';

// function mapStateToProps(state) {
//   return {
//     newTodoInput: selectTodosInput(state),
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onNewTodoChange(inputVal) {
//       dispatch(todoChange(inputVal));
//     },
//     onNewTodoAdd(inputVal) {
//       dispatch(todoAdd(inputVal));
//     },
//   };
// }

// const enhance = connect(mapStateToProps, mapDispatchToProps);

// export default enhance(TodoForm);

// <Container>
//   <TodoForm newTodoInput={selectTodosInput(state)} onNewTodoChange={(inputVal) => dispatch(todoChange(inputVal))}>
// <Container>

export default function TodoFormContainer() {
  const newTodoInput = useSelector(selectTodosInput);
  const dispatch = useDispatch();

  // ajouter éventuellement useCallback
  function onNewTodoChange(inputVal) {
    dispatch(todoChange(inputVal));
  }

  // ajouter éventuellement useCallback
  function onNewTodoAdd(inputVal) {
    dispatch(todoAdd(inputVal));
  }

  return (
    <TodoForm
      newTodoInput={newTodoInput}
      onNewTodoChange={onNewTodoChange}
      onNewTodoAdd={onNewTodoAdd}
    />
  );
}
