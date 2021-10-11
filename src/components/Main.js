import Nav from './Nav';
import Jumbotron from './Jumbotron';
import Message from './Message';
import Slider from './Slider';

import './Main.scss';

export default function Home() {
  return (
    <div className="main">
      <Nav />

      <Jumbotron />

      <Message />

      <Slider />
    </div>
  );
}
