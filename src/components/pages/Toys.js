import HeadImg from './HeadImg';
import data from '../../db/ItemsList';
import Products from '../Products';

import bg from '../../images/toys-bg.jpeg';

export default function Toys() {
  const items = data.filter((item) => item.tag === 'toys');

  return (
    <>
      <HeadImg title={'놀잇감'} bg={bg} />
      <div className="title">
        <h1>놀잇감</h1>
      </div>
      <div className="container">
        <Products items={items} />
      </div>
    </>
  );
}
