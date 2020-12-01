import { memo } from 'react';
import './TodoItem.css';

function TodoItem({ item, onDeleteItem }) {
  console.log('render TodoItem');

  return (
    <div className="TodoItem">
      <span>{item.text}</span>
      <button onClick={() => onDeleteItem(item)}>-</button>
    </div>
  );
}

export default memo(TodoItem);