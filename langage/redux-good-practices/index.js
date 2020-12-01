const { todoAdd } = require("./actions");
const { configureStore } = require("./configureStore");
const { todosContainingSelector } = require("./selectors");

const store = configureStore();

function todos() {
  store.subscribe(() => {
    const state = store.getState();
    console.log('subscribe', todosContainingSelector(state, 'C'));
  });
}


function users() {
  store.subscribe(() => {
    const state = store.getState();
    console.log('subscribe', state);
  });
}

todos();
users();


function handleSubmit(val) {
  store.dispatch(todoAdd(val))
}

handleSubmit('ABC');
handleSubmit('DEF');

function handleClick(val) {
  store.dispatch(todoAdd(val))
}

handleClick('GHICLICK');