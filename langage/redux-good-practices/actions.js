const { TODO_ADD } = require("./constants");

function todoAdd(val) {
  return {type: TODO_ADD, payload: {text: val}}
}

exports.todoAdd = todoAdd;