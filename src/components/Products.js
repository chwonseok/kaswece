import './Products.scss';

export default function Products({ items }) {
  return (
    <div className="toys-box">
      {items.map((toy) => {
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
  );
}
