import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

import './Banner.scss';

export default function Banner() {
  return (
    <div className="container">
      <Carousel
        autoPlay={true}
        interval={5000}
        showArrows={true}
        centerMode={true}
        centerSlidePercentage={50}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <Link to="/toys">
            <img
              src={process.env.PUBLIC_URL + '/images/carousel-0.jpeg'}
              alt=""
            />
            <p className="legend">놀잇감</p>
          </Link>
        </div>
        <div>
          <Link to="/others">
            <img
              src={process.env.PUBLIC_URL + '/images/carousel-1.jpeg'}
              alt=""
            />
            <p className="legend">기타용품</p>
          </Link>
        </div>
        <div>
          <Link to="/board">
            <img
              src={process.env.PUBLIC_URL + '/images/carousel-2.jpeg'}
              alt=""
            />
            <p className="legend">게시판</p>
          </Link>
        </div>
      </Carousel>
    </div>
  );
}
