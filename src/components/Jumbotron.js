import './Jumbotron.scss';

export default function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="video-box">
        <video
          className="bg-video"
          src={process.env.PUBLIC_URL + '/images/bg-video.mp4'}
          autoPlay
          muted
          loop
        ></video>
        <h1>삶과 사회는 아이들이 이끌어갑니다.</h1>
      </div>
    </div>
  );
}
