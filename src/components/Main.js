import Nav from './Nav';
import Jumbotron from './Jumbotron';
import Message from './Message';
import Slider from './Slider';

import './Main.scss';
import NewItems from './NewItems';

export default function Home() {
  return (
    <div className="main">
      <Nav />

      <Jumbotron />

      <Message />

      <Slider />

      <NewItems />
    </div>
  );
}
