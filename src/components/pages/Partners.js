import HeadImg from './HeadImg';
import partners from '../../db/Partner-list';

import './Partners.scss';

export default function Partners() {
  console.log(partners);
  return (
    <>
      <HeadImg />
      <div className="title">
        <h1>회원 기관</h1>
      </div>
    </>
  );
}
