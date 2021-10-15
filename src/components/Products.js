import './Products.scss';

export default function Products({ items }) {
  return (
    <div className="products-box">
      {items.map((product) => {
        return (
          <div key={product.id} className="product-box">
            <div className="product-img">
              <img
                src={process.env.PUBLIC_URL + `/images/items/${product.link}`}
                alt={product.name}
              />
            </div>
            <div className="product-name">{product.name}</div>
            <div className="product-price">{product.price}원</div>
          </div>
        );
      })}
    </div>
  );
}
