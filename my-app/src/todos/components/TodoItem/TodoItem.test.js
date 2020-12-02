import { shallow } from 'enzyme';
import TodoItem from './TodoItem';

test('TodoItem renders', () => {
  const todo = {
    id: 123,
    text: 'ABC',
    completed: false,
  };

  function handleDelete() {}

  shallow(<TodoItem item={todo} onDeleteItem={handleDelete} />)
});


test('TodoItem show item', () => {
  const todo = {
    id: 123,
    text: 'ABC',
    completed: false,
  };

  function handleDelete() {}

  const wrapper = shallow(<TodoItem item={todo} onDeleteItem={handleDelete} />);
  expect(wrapper.find('span').text()).toContain('ABC');
})

test('TodoItem calls onDeleteItem on button click', () => {
  const todo = {
    id: 123,
    text: 'ABC',
    completed: false,
  };

  const handleDelete = jest.fn();

  const wrapper = shallow(<TodoItem item={todo} onDeleteItem={handleDelete} />);
  wrapper.find('button').simulate('click');

  expect(handleDelete).toHaveBeenCalledWith(todo);
})
