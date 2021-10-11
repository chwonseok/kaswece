import './Jumbotron.scss';

export default function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="video-box">
        <video className="bg-video" muted loop>
          <source
            src={process.env.PUBLIC_URL + '/images/bg-video.mp4'}
            type="video/mp4"
          />
        </video>
        <h1>삶과 사회는 아이들이 이끌어갑니다.</h1>
      </div>
    </div>
  );
}
