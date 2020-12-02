import { connect } from 'react-redux';

import { todoAdd, todoChange } from '../actions';
import TodoForm from '../components/TodoForm/TodoForm';
import { selectTodosInput } from '../selectors';

function mapStateToProps(state) {
  return {
    newTodoInput: selectTodosInput(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewTodoChange(inputVal) {
      dispatch(todoChange(inputVal));
    },
    onNewTodoAdd(inputVal) {
      dispatch(todoAdd(inputVal));
    },
  };
}

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(TodoForm);

// <Container>
//   <TodoForm newTodoInput={selectTodosInput(state)} onNewTodoChange={(inputVal) => dispatch(todoChange(inputVal))}>
// <Container>
