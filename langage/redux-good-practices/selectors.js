function todosSelector(state) {
  return state.todos
}

function todosContainingSelector(state, filterVal) {
  return todosSelector(state).filter((t) => t.text.includes(filterVal))
}

exports.todosSelector = todosSelector;
exports.todosContainingSelector = todosContainingSelector;