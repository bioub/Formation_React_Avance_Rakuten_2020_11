const redux = require('redux');

const initialState = { count: 0 };

const reducer = (previousState = initialState) => previousState;

/** @type {import('redux').Store} */
const store = redux.createStore(reducer);

// store.dispatch({type: '@@INIT'});

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
}); 

store.dispatch({type: 'test'});
store.dispatch({type: 'test'});
store.dispatch({type: 'test'});

// pattern observer
// document.addEventListener('test', () => {});
// document.dispatchEvent(new Event('test'));
// const event = new Event('test')
// event.type === 'test';