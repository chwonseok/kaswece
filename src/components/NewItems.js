import { Link } from 'react-router-dom';
import data from '../db/ItemsList';

import './NewItems.scss';

export default function NewItems() {
  return (
    <div className="container">
      <div className="title">
        <h1>New Items</h1>
      </div>
      <div className="newitems-box">
        {data
          .filter((cur) => cur.new === true)
          .map((cur, i) => {
            return (
              <div key={i} className="newitems-item">
                <Link to={`/items/${cur.id}`} className="newitems-grid">
                  <img
                    src={process.env.PUBLIC_URL + `/images/items/${cur.link}`}
                    alt={cur.name}
                  />
                  <div className="newitems-new">
                    <span>신상품</span>
                  </div>
                  <div className="newitems-info">
                    <h2 className="newitems-name">{cur.name}</h2>
                    <h3 className="newitems-price">{cur.price}원</h3>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
