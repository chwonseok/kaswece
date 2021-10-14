import partners from '../../db/Partner-list';

import './Modal.scss';

export default function Modal(props) {
  const id = props.id;

  const closeModal = () => {
    props.onCloseModal(false);
  };
  return (
    <div className="modal-bg">
      <div className="modal-box" style={{ background: partners[id].color }}>
        <div className="modal-smallbox">
          <h1 className="modal-partner__name">{partners[id].name}</h1>
          <div className="modal-partner__info">
            <p>원명: {partners[id].name}</p>
            <br />
            <p>이메일: {partners[id].email}</p>
            <br />
            <p>주소: {partners[id].address}</p>
          </div>
        </div>
        <button onClick={closeModal} className="modal-btn" type="button">
          닫기
        </button>
      </div>
    </div>
  );
}
