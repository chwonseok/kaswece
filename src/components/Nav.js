import './Nav.scss';

export default function Nav() {
  return (
    <nav className="nav container">
      <div className="nav-left">
        <h1 className="home">KASWECE</h1>
      </div>
      <ul className="nav-menu">
        <li>한국발도르프영유아교육연대</li>
        <li>놀잇감</li>
        <li>기타용품</li>
        <li>아나바다</li>
        <li>게시판</li>
      </ul>
      <div className="nav-right">
        <div>
          <i className="fas fa-search"></i>
        </div>
        <div>
          <i className="fas fa-user-alt"></i>
        </div>
        <div>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
    </nav>
  );
}
