const redux = require('redux');
const { reducer } = require('./reducers');



function configureStore() {
  

  

  /** @type {import('redux').Store} */
  const store = redux.createStore(reducer);

  return store;
}

exports.configureStore = configureStore;