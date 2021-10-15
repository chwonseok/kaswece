import './HeadImg.scss';

export default function HeadImg(props) {
  const title = props.title;
  const bg = props.bg;

  return (
    <div className="head-box">
      <div
        className="head-img"
        style={{
          position: 'absolute',
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
        }}
      ></div>
      <h1 className="head-title">{title}</h1>
    </div>
  );
}
