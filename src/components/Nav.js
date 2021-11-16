import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';

import './Nav.scss';

export default function Nav() {
  const [dropdown, setDropdown] = useState(false);
  const [resize, setResize] = useState({ width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => {
      setResize({ width: window.innerWidth });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const WebNav = () => {
    return (
      <nav className="nav container">
        <Link to="/kaswece" className="home">
          KASWECE
        </Link>

        <ul className="nav-menu">
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className="nav-btn">한국발도르프영유아교육연대</div>
            {dropdown ? <Dropdown /> : ''}
          </li>
          <li className="nav-item">
            <Link to="/toys" className="nav-btn">
              놀잇감
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/others" className="nav-btn">
              기타용품
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/board" className="nav-btn">
              게시판
            </Link>
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
  };

  const MobileNav = () => {
    return (
      <nav className="mobile-nav">
        <div className="mobile-nav__left">
          <i className="fas fa-bars"></i>
        </div>
        <div className="mobile-nav__center">
          <Link to="/kaswece" className="home">
            KASWECE
          </Link>
        </div>
        <div className="mobile-nav__right">
          <i className="nav-btn fas fa-shopping-cart"></i>
        </div>
      </nav>
    );
  };

  return <>{resize.width <= 650 ? <MobileNav /> : <WebNav />}</>;
}
