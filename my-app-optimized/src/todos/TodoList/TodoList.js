import { memo, PureComponent } from "react";
import TodoItem from "../TodoItem/TodoItem";

// class TodoList extends PureComponent {
//   // shouldComponentUpdate(nextProps) {
//   //   return nextProps.items !== this.props.items;
//   // }
//   render() {
//     console.log('render TodoList');

//     const { items, onDeleteItem } = this.props;
//     return (
//       <div className="TodoList">
//         {items.map((it) => (
//           <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} />
//         ))}
//       </div>
//     );
//   }
// }

function TodoList({ items, onDeleteItem }) {
  console.log('render TodoList');

  return (
    <div className="TodoList">
      {items.map((it) => (
        <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} />
      ))}
    </div>
  );
}

export default memo(TodoList);
