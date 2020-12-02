import ReactDOM from 'react-dom';

import App from './App';

// Style BDD
// Behavior Driven Development
// il devrait faire son rendu sans crash
it('renders without crashing', () => {
  // JSDOM
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
