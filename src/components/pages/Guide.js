import HeadImg from './HeadImg';

import './Guide.scss';

export default function Guide() {
  return (
    <>
      <HeadImg title={'KASWECE'} />
      <div className="title">
        <h1>이용 안내</h1>
      </div>

      <div className="guide-box container">
        <div className="guide-left">
          <h1>주문 및 결제 증빙 서류 발급 요청</h1>
          <p>
            회원기관은 개인 회원가입 없이 비회원으로 주문하시면 됩니다.
            <br />
            [카드결제] 시 구매내역에서 영수증 발급하기 버튼으로 서류 제출하시면
            됩니다.
            <br />
            [계좌이체] 시 현금영수증이나 세금계산서가 필요하신 분들은 '서류요청'
            게시판에 글 남겨주세요.
          </p>
          <h1>홈페이지 적립금 사용 안내</h1>
          <p>
            KASWECE 홈페이지 회원 가입 시 1,000원의 적립금이 지급됩니다.
            <br />
            이후 물품을 구매하실 때마다 물품 구매 금액의 1%가 적립됩니다.
            <br />
            구매후기 글 작성 시 500원이 적립되며 후기에 사진 첨부 시 500원이
            추가 적립됩니다.
            <br />
            적립된 금액은 다음 번 구매에서 현금처럼 사용하실 수 있습니다.
          </p>
          <h1>상품 배송 안내</h1>
          <p>
            KASWECE는 ㅇㅇㅇ 택배사를 이용합니다.
            <br />
            기본 배송비는 3,000원이며 5만 원 이상 구매 시 무료 배송 혜택이
            있습니다.
            <br />
            평일 오후 3시 이전 주문 및 결제완료 시 당일 발송되며 이후 주문은
            익일 발송됩니다.
            <br />
            상품 출고 후 (주말, 공휴일 제외) 평균 2~3일 내에 상품 수령
            가능합니다.
          </p>
        </div>
        <div className="guide-right">
          <div className="guide-img"></div>
        </div>
      </div>
    </>
  );
}
