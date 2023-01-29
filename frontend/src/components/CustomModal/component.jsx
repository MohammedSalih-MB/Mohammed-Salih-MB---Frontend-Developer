import React from 'react';
import Modal from '@mui/material/Modal';

export default (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
    >
      <div className="spacex-modal">
        <div className='spacex-modal__title'>
          <p>
            {props.title}
          </p>
          <span onClick={props.handleClose}>
            ✖
          </span>
        </div>
        <div className='spacex-modal__content'>
          {props.children}
        </div>
      </div>
    </Modal>
  )
}
