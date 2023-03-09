import React, { useState } from 'react';

import ModalUI from '../components/page2/ModalUI';

const Page2 = () => {

  const [sModalVisible, setSModalVisible] = useState(false);
  const [rModalVisible, setRModalVisible] = useState(false);
  const [dModalVisible, setDModalVisible] = useState(false);
  const [deleteButtonState, setDeleteButtonState] = useState(`Delete`);
  const [removeCount, setRemoveCount] = useState(1);
  const [deleteCount, setDeleteCount] = useState(1);

  const toggleDeleteButton = (flag) => {
    return {
      Delete: 'Disabled',
      Disabled: 'Delete'
    }[flag];
  };

  const onClosingModal = (modalId, signal) => {
    switch (modalId) {
      case 'single': {
        setSModalVisible(false);
        break;
      }
      case 'remove': {
        setRModalVisible(false);
        signal === 'remove' && setRemoveCount(removeCount + 1);
        break;
      }
      case 'delete': {
        signal === 'delete' && setDeleteButtonState(toggleDeleteButton(deleteButtonState));
        setDModalVisible(false);
        setDeleteCount(deleteCount + 1);
        break;
      }
      default: {
        break;
      }
    };
  };

  return (
    <div className='page2-container'>
      {sModalVisible && <ModalUI isVisible={sModalVisible} title='Information' buttonText='Single CTA' close={onClosingModal} modalId='single' />}
      {rModalVisible && <ModalUI isVisible={rModalVisible} title='Remove?' buttonText={`Remove ${removeCount} `} close={onClosingModal} modalId='remove' />}
      {dModalVisible && <ModalUI isVisible={dModalVisible} title='Delete?' buttonText={`${deleteButtonState} ${deleteCount}`} close={onClosingModal} modalId='delete' />}
      <button onClick={() => { setSModalVisible(true) }}>Single CTA</button>
      <button onClick={() => { setRModalVisible(true) }}>Remove {removeCount}</button>
      <button onClick={() => { setDModalVisible(true) }}>{deleteButtonState} {deleteCount}</button>
    </div>
  );
};

export default Page2;