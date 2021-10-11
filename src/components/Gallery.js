import './Gallery.scss';

export default function Gallery() {
  return (
    <div className="container">
      <div className="title">
        <h1>발도르프 교육 현장</h1>
      </div>
      <div className="gallery-grid">
        <div className="div1">
          <img
            src={process.env.PUBLIC_URL + `/images/gallery/banner5.jpeg`}
            alt=""
          />
        </div>
        <div className="div2">
          <img
            src={process.env.PUBLIC_URL + `/images/gallery/banner4.png`}
            alt=""
          />
        </div>
        <div className="div3">
          <img
            src={process.env.PUBLIC_URL + `/images/gallery/banner2.jpeg`}
            alt=""
          />
        </div>
        <div className="div4">
          <img
            src={process.env.PUBLIC_URL + `/images/gallery/banner1.jpeg`}
            alt=""
          />
        </div>
        <div className="div5">
          <img
            src={process.env.PUBLIC_URL + `/images/gallery/banner3.jpeg`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
