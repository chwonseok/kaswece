import './ItemDetail.scss';
import data from '../../db/ItemsList';
import { useState } from 'react';

export default function ItemDetail(props) {
  const [quantity, setQuantity] = useState(1);
  const itemId = props.match.params.id;
  const item = data[itemId];
  const [price, setPrice] = useState(item.price);

  const handlePlus = () => {
    setQuantity(quantity + 1);
    const totalPrice =
      (quantity + 1) * parseInt(item.price.split(',').join(''));
    setPrice(totalPrice.toLocaleString());
  };

  const handleMinus = () => {
    if (quantity < 2) return;
    setQuantity(quantity - 1);
    const totalPrice =
      (quantity - 1) * parseInt(item.price.split(',').join(''));
    setPrice(totalPrice.toLocaleString());
  };

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
          <div className="item-quantity">
            <div
              onClick={() => {
                handlePlus();
              }}
              className="quantity-btn plus"
            >
              <span>+</span>
            </div>
            <div className="amount">
              <span>{quantity}</span>
            </div>
            <div
              onClick={() => {
                handleMinus();
              }}
              className="quantity-btn minus"
            >
              <span>-</span>
            </div>
          </div>
          <div className="item-border"></div>
          <div className="total-amount">
            <h3>주문 수량</h3>
            <h4>{quantity}개</h4>
          </div>
          <div className="total-price">
            <h3>총 상품 금액</h3>
            <h4>{price}원</h4>
          </div>
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
