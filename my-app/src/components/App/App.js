import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Todos from '../../todos/components/Todos/Todos';
import Users from '../../users/components/Users/Users';
import TopBar from '../TopBar/TopBar';
import Home from '../Home/Home';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <div className="App-Route-Container">
          <ErrorBoundary>
            <Switch>
              <Route path="/todos" component={Todos} />
              <Route path="/users" component={Users} />
              <Route path="/">
                {({ match }) => (
                  <div>
                    <Home /> Match : {JSON.stringify(match)}
                  </div>
                )}
              </Route>
            </Switch>
          </ErrorBoundary>
        </div>
      </BrowserRouter>
    </div>
  );
}
