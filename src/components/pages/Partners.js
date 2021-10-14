import HeadImg from './HeadImg';
import partners from '../../db/Partner-list';

import './Partners.scss';

export default function Partners() {
  return (
    <>
      <HeadImg />
      <div className="title">
        <h1>회원 기관</h1>
      </div>

      <div className="container">
        <div className="partners-box">
          {partners.map((partner) => {
            return (
              <div
                className="partner-box"
                style={{ background: partner.color }}
              >
                <h2 className="partner-name">{partner.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
