import { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNav = () => {
  const [showMenuModal, setShowMenuModal] = useState(false);

  const handleMenuModal = () => {
    setShowMenuModal(!showMenuModal);
  };

  const handleMenuModalOff = (e) => {
    const clicked = e.target.closest('.menu-modal__box');
    if (!clicked) setShowMenuModal(false);
  };

  const MenuModal = () => {
    return (
      <div onClick={handleMenuModalOff} className="menu-modal__bg">
        <div className="menu-modal__box">
          <div className="menu-modal__header">
            <Link onClick={handleMenuModal} to="/kaswece" className="home">
              KASWECE
            </Link>
            <div>
              <i className="fas fa-user-alt"></i>
            </div>
          </div>
          <ul>
            <li className="mobile-menu__item">
              <Link
                onClick={handleMenuModal}
                to="/greeting"
                className="mobile-menu__btn"
              >
                인사말
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link
                onClick={handleMenuModal}
                to="/guide"
                className="mobile-menu__btn"
              >
                이용안내
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link
                onClick={handleMenuModal}
                to="/partners"
                className="mobile-menu__btn"
              >
                회원기관
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link
                onClick={handleMenuModal}
                to="/toys"
                className="mobile-menu__btn"
              >
                놀잇감
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link
                onClick={handleMenuModal}
                to="/others"
                className="mobile-menu__btn"
              >
                기타용품
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link
                onClick={handleMenuModal}
                to="/board"
                className="mobile-menu__btn"
              >
                게시판
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      <nav className="mobile-nav">
        <div className="mobile-nav__left">
          <i onClick={handleMenuModal} className="fas fa-bars"></i>
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
      {showMenuModal ? <MenuModal /> : ''}
    </>
  );
};

export default MobileNav;
