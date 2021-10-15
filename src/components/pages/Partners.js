import HeadImg from './HeadImg';
import partners from '../../db/PartnerList';
import Modal from './Modal';

import './Partners.scss';
import bg from '../../images/head-banner1.jpeg';
import { useState } from 'react';

let id;

export default function Partners() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);

  const closeModal = (value) => setShowModal(value);

  return (
    <>
      <HeadImg title={'KASWECE'} bg={bg} />
      <div className="title">
        <h1>회원 기관</h1>
      </div>

      <div className="container">
        <div className="partners-box">
          {partners.map((partner) => {
            return (
              <div
                key={partner.id}
                onClick={() => {
                  openModal();
                  id = partner.id;
                }}
                className="partner-box"
                style={{ background: partner.color }}
              >
                <h2 className="partner-name">{partner.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
      {showModal ? <Modal id={id} onCloseModal={closeModal} /> : ''}
    </>
  );
}
