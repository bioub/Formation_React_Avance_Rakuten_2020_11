import './index.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App/App';
import { configureStore } from '@reduxjs/toolkit'
import * as serviceWorker from './serviceWorker';
import { todosReducer } from './todos/reducers';
import { usersReducer } from './users/reducers';

ReactDOM.render(
  <Provider store={configureStore({
    reducer: {
      todos: todosReducer,
      users: usersReducer,
    }
  })}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
