import Jumbotron from './Jumbotron';
import Message from './Message';
import Slider from './Slider';

import NewItems from './NewItems';
import Gallery from './Gallery';
import ToDonate from './ToDonate';
import Others from './Others';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Jumbotron />

      <Message />

      <Slider />

      <NewItems />

      <Gallery />

      <ToDonate />

      <Others />

      <Footer />
    </>
  );
}
