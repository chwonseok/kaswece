import HeadImg from './HeadImg';
import bg from '../../images/donate-bg.jpeg';

import './Donate.scss';

export default function Donate() {
  return (
    <>
      <HeadImg title={'후원하기'} bg={bg} />
      <div className="container">
        <div className="title">
          <h1>후원 계좌</h1>
        </div>
        <div className="centerize">
          <p>한국 123123-12-123-123 한국발도르프영유아교육연대</p>

          <div className="title">
            <h1>후원 문의</h1>
          </div>

          <p>Tel: 123-1234-1234</p>
          <br />
          <p>Fax: 12-123-1234</p>
          <br />
          <p>E-mail: abc@abcd.com</p>
          <br />

          <div>
            <br />
            <br />
            <p>
              본 단체는 국제발도르프교육 그룹과 연대 협력을 통해 교육의 질을
              보호하고 지원할 수 있는 후원사업을 아래와 같이 진행하고자 합니다.
            </p>
            <br />
            <br />
            <p>
              1. 발도르프 교사교육 및 인재양성을 위한 지원 사업
              <br /> 2. 발도르프 교육 실천현장 지원 사업
              <br />
              3. 발도르프교사 및 연구 지원 사업
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
