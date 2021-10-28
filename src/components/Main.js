import Jumbotron from './Jumbotron';
import Message from './Message';
import Slider from './Slider';

import NewItems from './NewItems';
import Gallery from './Gallery';
import ToDonate from './ToDonate';
import OtherLinks from './OtherLinks';

export default function Home() {
  return (
    <>
      <Jumbotron />

      <Message />

      <Slider />

      <NewItems />

      <Gallery />

      <ToDonate />

      <OtherLinks />
    </>
  );
}
