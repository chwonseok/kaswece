import HeadImg from './HeadImg';
import data from '../../db/ItemsList';
import Products from '../Products';

import bg from '../../images/others-bg.jpeg';

export default function Others() {
  const items = data.filter((item) => item.tag === 'others');

  return (
    <>
      <HeadImg title={'기타용품'} bg={bg} />
      <div className="title">
        <h1>기타용품</h1>
      </div>
      <div className="container">
        <Products items={items} />
      </div>
    </>
  );
}
