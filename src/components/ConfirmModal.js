import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Modal from 'react-modal';

const ConfirmModal = forwardRef(({onConfirm}, ref) => {
  const [isActive, setActive] = useState(false);
  const [item, setItem] = useState({});

  const open = () => setActive(true);
  const close = () => setActive(false);

  useImperativeHandle(ref, () => ({ open, close, setItem, item }));

  const handleConfirm = (event) => {
    onConfirm(event);
    close();
  }

  return (
    <Modal isOpen={isActive} onRequestClose={close} className='modal' ariaHideApp={false}>
      <div className='heading third'>Are you sure?</div>
      <div className='button-group'>
        <div className='button no-highlight' onClick={handleConfirm}>Yes</div>
        <div className='button no-highlight' onClick={close}>No</div>
      </div>
    </Modal>
  )
});

export default ConfirmModal;
