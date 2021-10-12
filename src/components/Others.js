import './Others.scss';

export default function Others() {
  return (
    <div className="container">
      <div className="other-links">
        <div className="other-link">
          <a href="https://kaswece.org/" target="_blank">
            <img
              src={process.env.PUBLIC_URL + `/images/kaswece-link.png`}
              alt=""
            />
          </a>
        </div>
        <div className="other-link">
          <img src={process.env.PUBLIC_URL + `/images/smile-link.png`} alt="" />
        </div>
        <div className="other-link">
          <a href="https://iaswece.org/home/" target="_blank">
            <img
              src={process.env.PUBLIC_URL + `/images/iaswece-link.png`}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
