const { TODO_ADD } = require("./constants");

function todoAdd(val) {
  return {type: TODO_ADD, payload: {text: val, id: Math.random()}}
}

exports.todoAdd = todoAdd;