import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Greeting from './components/pages/Greeting';
import Donate from './components/pages/Donate';
import Guide from './components/pages/Guide';
import Partners from './components/pages/Partners';
import Toys from './components/pages/Toys';

import './App.scss';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/kaswece" exact component={Main} />
          <Route path="/greeting" exact component={Greeting} />
          <Route path="/donate" exact component={Donate} />
          <Route path="/guide" exact component={Guide} />
          <Route path="/partners" exact component={Partners} />
          <Route path="/toys" exact component={Toys} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
