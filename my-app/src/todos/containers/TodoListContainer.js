import { connect } from 'react-redux';

import TodoList from '../components/TodoList/TodoList';
import { selectTodosCount, selectTodosItems } from '../selectors';

function mapStateToProps(state) {
  return {
    items: selectTodosItems(state),
    count: selectTodosCount(state),
  };
}

// Exercice : supprimer des todos via Redux
// 1 - créer une constante TODO_DELETE dans constants.js
// 2 - créer un action creator todoDelete dont le payload
// sera la todo à supprimer dans actions.js
// 3 - modifier itemsReducer dans reducers.js pour supprimer
// du state la todo correspondant sur l'action TODO_DELETE
// 4 - ajouter ici une fonction mapDispatchToProps qui devra créer
// la props onDeleteItem (appelée au niveau de TodoItem)

// onDeleteItem

const enhance = connect(mapStateToProps);

export default enhance(TodoList);

// <Container>
//   <TodoList items={selectTodosItems(state)} count={selectTodosCount(state)}>
// <Container>
