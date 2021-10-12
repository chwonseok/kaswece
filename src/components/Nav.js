import './Nav.scss';

export default function Nav() {
  return (
    <nav className="nav container">
      <div className="nav-left">
        <h1 className="home nav-btn">KASWECE</h1>
      </div>
      <div className="nav-menu">
        <h2 className="nav-btn">한국발도르프영유아교육연대</h2>
        <h2 className="nav-btn">놀잇감</h2>
        <h2 className="nav-btn">기타용품</h2>
        <h2 className="nav-btn">아나바다</h2>
        <h2 className="nav-btn">게시판</h2>
      </div>
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
