import { createAction, nanoid } from '@reduxjs/toolkit';

const todoChange = createAction('TODO_CHANGE');
const todoDelete = createAction('TODO_DELETE');
const todoAdd = createAction('TODO_ADD', (text) => ({
  payload: {
    id: nanoid(),
    text,
    completed: false,
  },
}));

// export function todoAddRequested() {
//   return (dispatch, state) => {
//     dispatch(todoAdd(state.todos.input));
//   }
// }

export { todoChange, todoDelete, todoAdd };
