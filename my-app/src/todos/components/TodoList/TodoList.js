import { PureComponent } from 'react';

import TodoCount from '../TodoCount/TodoCount';
import TodoItem from '../TodoItem/TodoItem';

export default class TodoList extends PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   return this.props.items !== nextProps.items;
  // }
  render() {
    const { count, items, onDeleteItem, /*dispatch*/ } = this.props;

    // function handleClick() {
    //   dispatch()
    // }

    return (
      <div>
        <div className="TodoList">
          {items.map((it) => (
            <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} />
          ))}
        </div>
        <TodoCount  />
      </div>
    );
  }
}
