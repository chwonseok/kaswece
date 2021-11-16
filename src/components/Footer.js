import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="company-info">
        <div className="company-info__main">
          <span>CONTACT US</span>
          <span>이용약관</span>
          <span>개인정보처리방침</span>
          <span>사업자정보확인</span>
        </div>

        <div className="company-info__detail-wrap">
          <div className="company-info__detail flex">
            <span>
              상호: 한국발도르프영유아교육연대 KASWECE | 대표: 홍길동 |
              개인정보관리책임자: 홍길동 | 전화: 012-3456-7890 | 이메일:
              abcdg@abcd.com
            </span>
          </div>
          <div className="company-info__detail flex">
            <span>
              상호: 한국발도르프영유아교육연대 KASWECE | 주소: 대한민국 서울시
              마포구 | 사업자등록번호: 123456789 | 통신판매: 000-00000-0000000 |
              호스팅제공자: GIHUB
            </span>
          </div>
        </div>
        <div>
          <span>© 한국발도르프영유아교육연대 KASWECE, ALL RIGHTS RESERVED</span>
        </div>
      </div>
      <div className="my-info">
        <a href="https://github.com/chwonseok" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/wonseok-choi-234903221/"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.instagram.com/chwonseok/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/chwonseok89/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <h3>
          Designed & Built by{' '}
          <a href="mailto:dev.chwonseok@gmail.com">Wonseok Choi</a>
        </h3>
      </div>
    </footer>
  );
}
