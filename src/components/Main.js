import Nav from './Nav';
import Jumbotron from './Jumbotron';
import Message from './Message';
import Slider from './Slider';

import './Main.scss';
import NewItems from './NewItems';
import Gallery from './Gallery';
import ToDonate from './ToDonate';
import Others from './Others';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="main">
      <Nav />

      <Jumbotron />

      <Message />

      <Slider />

      <NewItems />

      <Gallery />

      <ToDonate />

      <Others />

      <Footer />
    </div>
  );
}
