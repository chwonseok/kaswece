import { Link } from 'react-router-dom';

import './ToDonate.scss';

export default function ToDonate() {
  return (
    <div className="container">
      <div className="donate">
        <div className="title">
          <h1>후원하기</h1>
        </div>
        <h2>발도르프 교육을 후원하는 일, 지금 시작해보세요!</h2>
        <Link to="/donate" className="btn donate-btn" type="button">
          후원하러 가기
        </Link>
      </div>
    </div>
  );
}
