import React, { useState } from 'react';
import './styles.css';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
        console.log("모달이 켜짐");
      } else {
        console.log("모달이 꺼짐");
      }
  };

  return (
    <div>
      <button id="openModal" onClick={showModal}>버튼 열기</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-background">
            <div className="title">안녕하세요</div>
            <p>모달 내용은 어쩌고 저쩌고..</p>
            <div className="button">
              <button id="closeModal" onClick={showModal}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;