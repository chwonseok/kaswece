import HeadImg from './HeadImg';
import data from '../../db/ItemsList';

import './Toys.scss';

export default function Toys() {
  return (
    <>
      <HeadImg title={'놀잇감'} />
      <div className="title">
        <h1>놀잇감</h1>
      </div>
      <div className="container">
        <div className="toys-box">
          {data
            .filter((cur) => cur.tag === 'toys')
            .map((toy) => {
              return (
                <div key={toy.id} className="toy-box">
                  <div className="toy-img">
                    <img
                      src={process.env.PUBLIC_URL + `/images/items/${toy.link}`}
                      alt={toy.name}
                    />
                  </div>
                  <div className="toy-name">{toy.name}</div>
                  <div className="toy-price">{toy.price}원</div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
