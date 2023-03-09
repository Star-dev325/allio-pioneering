import React from 'react';
import Modal from 'react-modal';

const ModalUI = ({ isVisible, title, buttonText, close, modalId }) => (
  <Modal
    className='single-modal'
    isOpen={isVisible}
    shouldCloseOnOverlayClick={false}
  >
    <div className='modal-container'>
      <h1>{title}</h1>
      {
        modalId === 'single' ? (<>
          <p>You have clicked the {buttonText} button</p>
          <div className='button-group'>
            <button className='single-button' onClick={() => { close(modalId) }}>OK</button>
          </div>
        </>) : modalId === 'remove' ? (<>
          <p>Are you sure you want to remove the {buttonText} button?</p>
          <div className='button-group'>
            <button className='cancel' onClick={() => { close(modalId) }}>Cancel</button>
            <button className='remove' onClick={() => { close(modalId, 'remove') }}>Remove</button>
          </div>
        </>) : (<>
          <p>Are you sure you want to delete the {buttonText} button? This cannot be undone!</p>
          <div className='button-group'>
            <button className='cancel' onClick={() => { close(modalId) }}>Cancel</button>
            <button className='delete' onClick={() => { close(modalId, 'delete') }}>Delete</button>
          </div>
        </>)
      }
    </div>
  </Modal>
);

export default ModalUI;