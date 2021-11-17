import { useEffect, useState } from 'react';

import './Jumbotron.scss';

export default function Jumbotron() {
  const [resize, setResize] = useState({ width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => {
      setResize({ width: window.innerWidth });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <div className="jumbotron">
      <div className="video-box">
        {resize.width <= 650 ? (
          <img
            className="bg-thumbnail"
            src={process.env.PUBLIC_URL + '/images/bg-thumbnail.png'}
            alt="background-thumbnail"
          />
        ) : (
          <video
            src={process.env.PUBLIC_URL + '/images/bg-video.mp4'}
            className="bg-video"
            autoPlay
            muted
            loop
          ></video>
        )}
        <h1>삶과 사회는 아이들이 이끌어갑니다.</h1>
      </div>
    </div>
  );
}
