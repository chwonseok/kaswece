import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
        {/* 여기에 쭉 작성하기 */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
