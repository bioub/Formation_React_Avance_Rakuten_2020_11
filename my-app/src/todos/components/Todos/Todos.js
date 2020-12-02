import Clock from '../../../components/Clock/Clock';
import TodoFormContainer from '../../containers/TodoFormContainer';
import TodoListContainer from '../../containers/TodoListContainer';
// import TodoForm from '../TodoForm/TodoForm';

export default function Todos() {
  return (
    <div className="Todos">
      {/* <TodoForm /> */}
      <TodoFormContainer />
      <TodoListContainer />

      <hr />
      <Clock />
    </div>
  );
}
