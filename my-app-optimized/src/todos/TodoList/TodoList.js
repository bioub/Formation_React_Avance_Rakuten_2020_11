import { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends Component {
  render() {
    const { items, onDeleteItem } = this.props;
    return (
      <div className="TodoList">
        {items.map((it) => (
          <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} />
        ))}
      </div>
    );
  }
}

export default TodoList;
