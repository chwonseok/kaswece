import { Link } from 'react-router-dom';
import './Nav.scss';

export default function Nav() {
  return (
    <nav className="nav container">
      <Link to="/" className="home">
        KASWECE
      </Link>

      <ul className="nav-menu">
        <li>
          <Link className="nav-btn">한국발도르프영유아교육연대</Link>
        </li>
        <li>
          <Link className="nav-btn">놀잇감</Link>
        </li>
        <li>
          <Link className="nav-btn">기타용품</Link>
        </li>
        <li>
          <Link className="nav-btn">아나바다</Link>
        </li>
        <li>
          <Link className="nav-btn">게시판</Link>
        </li>
      </ul>

      <div className="nav-right">
        <div>
          <i className="nav-btn fas fa-search"></i>
        </div>
        <div>
          <i className="nav-btn fas fa-user-alt"></i>
        </div>
        <div>
          <i className="nav-btn fas fa-shopping-cart"></i>
        </div>
      </div>
    </nav>
  );
}
