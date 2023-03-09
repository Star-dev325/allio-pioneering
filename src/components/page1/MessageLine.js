import React from 'react';

const MessageLine = ({ timeRecord, content }) => (
  <div className='message-line'>
    <p>{`${timeRecord} ${content}`}</p>
  </div>
);

export default MessageLine;