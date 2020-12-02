import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { todoAdd, todoChange, todoDelete } from './actions';

const initialTodosState = {
  input: '',
  items: [],
};

const inputReducer = createReducer(initialTodosState.input, {
  [todoChange]: (state, { payload }) => payload,
});

const itemsReducer = createReducer(initialTodosState.items, {
  [todoAdd]: (state, { payload }) => [...state, payload],
  [todoDelete]: (state, { payload }) => state.filter((it) => it.id !== payload.id),
});

const todosReducer = combineReducers({
  input: inputReducer,
  items: itemsReducer,
});

export { inputReducer, itemsReducer, todosReducer };
