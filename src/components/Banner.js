import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

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
          <img
            src={process.env.PUBLIC_URL + '/images/carousel-0.jpeg'}
            alt=""
          />
          <p className="legend">놀잇감</p>
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + '/images/carousel-1.jpeg'}
            alt=""
          />
          <p className="legend">기타용품</p>
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + '/images/carousel-2.jpeg'}
            alt=""
          />
          <p className="legend">아나바다</p>
        </div>
      </Carousel>
    </div>
  );
}
