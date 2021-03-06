const redux = require('redux');
const { USER_ADD, TODO_ADD } = require('./constants');

const initialState = {
  users: [],
  todos: [],
};

// function pure :
  // - prédicitive (ex: sum, not prédictive: Math.random(), uuid)
  // - pas de side effect (pas de log, ajax, génération d'id)
  // - pas de modification des paramètres

  // Flux Standard Action (FSA)
  // https://github.com/redux-utilities/flux-standard-action
  // function reducer(state = initialState, action) {
  //   switch (action.type) {
  //     case TODO_ADD:
  //       return {
  //         ...state, // SPREAD operator
  //         todos: todosReducer(state.todos, action),
  //       }
  //     case USER_ADD:
  //       return {
  //         ...state,
  //         users: usersReducer(state.users, action),
  //       }
  //     default:
  //       return state;
  //   }
  // }

  const reducer = redux.combineReducers({
    todos: todosReducer,
    users: usersReducer,
  });

  function todosReducer(state = initialState.todos, action) {
    switch (action.type) {
      case TODO_ADD:
        return [...state, action.payload];
      default:
        return state;
    }
  }

  function usersReducer(state = initialState.users, action) {
    switch (action.type) {
      case USER_ADD:
        return [...state, action.payload];
      default:
        return state;
    }
  }

  

  exports.reducer = reducer;