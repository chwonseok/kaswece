import { Route, Switch } from 'react-router';
import Main from './components/Main';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
