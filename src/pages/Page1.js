import moment from 'moment';
import React, { useState } from 'react';
import MessageLine from '../components/page1/MessageLine';

const Page1 = () => {

  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState('');
  const [isLight, setIsLight] = useState(true);
  const [buttonCount, setButtonCount] = useState(1);

  const appendMessage = (messageContent) => {
    setMessageList([
      ...messageList,
      {
        timeRecord: moment().format('MM/DD/YY hh:mm:ss'),
        content: messageContent
      }]);
  };

  return (
    <div className='page1-container'>
      <div className='split-view left'>
        <button onClick={() => {
          const setThemeTo = isLight ? 'dark' : 'light';
          document.body.setAttribute('data-theme', `${setThemeTo}-theme`);
          appendMessage(`Theme was set to ${setThemeTo}`);
          setIsLight(!isLight);
        }}>{`Set ${isLight ? 'Dark' : 'Light'} Theme`}</button>
        <div>
          <textarea className='text-plain' value={message} onChange={(e) => { setMessage(e.target.value) }} />
          <button disabled={message === ''} onClick={() => {
            appendMessage(`Message Sent: ${message}`);
            setMessage('');
          }}>Submit</button>
        </div>
        <button onClick={() => {
          setButtonCount(buttonCount + 1);
          appendMessage(`Button ${buttonCount} added`);
        }}>Add Button {buttonCount}</button>
      </div>
      <div className='split-view right'>
        {messageList.map((message, index) => <MessageLine key={index} {...message} />)}
      </div>
    </div>
  );
};

export default Page1;