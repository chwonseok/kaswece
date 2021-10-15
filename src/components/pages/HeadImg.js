import './HeadImg.scss';

export default function HeadImg({ title }) {
  return (
    <div className="head-box">
      <div className="head-img"></div>
      <h1 className="head-title">{title}</h1>
    </div>
  );
}
