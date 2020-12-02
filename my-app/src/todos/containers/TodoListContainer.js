import { connect } from 'react-redux';
import { todoDelete } from '../actions';

import TodoList from '../components/TodoList/TodoList';
import { selectTodosCount, selectTodosItems } from '../selectors';

function mapStateToProps(state) {
  return {
    items: selectTodosItems(state),
    count: selectTodosCount(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDeleteItem(item) {
      dispatch(todoDelete(item));
    },
  };
}

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(TodoList);

// <Container>
//   <TodoList items={selectTodosItems(state)} count={selectTodosCount(state)}>
// <Container>
