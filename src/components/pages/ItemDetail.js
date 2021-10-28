import './ItemDetail.scss';
import data from '../../db/ItemsList';

export default function ItemDetail(props) {
  const itemId = props.match.params.id;
  const item = data[itemId];
  console.log(item);

  return (
    <div className="container">
      <div className="item-box">
        <div className="item-left">
          <img
            src={process.env.PUBLIC_URL + `/images/items/${item.link}`}
            alt={item.name}
          />
        </div>
        <div className="item-right">
          <h1>{item.name}</h1>
          <h2>{item.price}원</h2>
          <h3>
            <span>배송비: </span> 무료
          </h3>
          {/* 수량 function 추가로 넣기 */}
          <div className="item-quantity"></div>
          <button className="btn item-btn">구매하기</button>
        </div>
      </div>
      <div className="border"></div>
      <div className="item-description">
        <p>{item.description}</p>
      </div>
    </div>
  );
}
