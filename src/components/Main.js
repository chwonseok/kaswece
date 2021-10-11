import Nav from './Nav';
import Jumbotron from './Jumbotron';

import './Main.scss';

export default function Home() {
  return (
    <div className="main">
      <Nav />

      <Jumbotron />
    </div>
  );
}
