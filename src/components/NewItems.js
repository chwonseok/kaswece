import newItemsData from '../db/NewitemsData';

import './NewItems.scss';

export default function NewItems() {
  const data = newItemsData;

  return (
    <div className="container">
      <div className="title">
        <h1>New Items</h1>
      </div>
      <div className="newitems-box">
        {data.map((cur, i) => {
          return (
            <div key={i} className="newitems-item">
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
            </div>
          );
        })}

        {/* <div className="newitems-item">
          <img
            src={process.env.PUBLIC_URL + '/images/items/wintergloves.png'}
            alt=""
          />
          <div className="newitems-new">신상품</div>
        </div>
        <div className="newitems-item">
          <img
            src={process.env.PUBLIC_URL + '/images/items/wallcloth.png'}
            alt=""
          />
          <div className="newitems-new">
            <span>신상품</span>
          </div>
        </div>
        <div className="newitems-item">
          <img
            src={process.env.PUBLIC_URL + '/images/items/pillow.jpeg'}
            alt=""
          />
          <div className="newitems-new">
            <span>신상품</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
