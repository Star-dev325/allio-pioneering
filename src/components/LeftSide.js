import React, { useState } from 'react';
import { leftMenuItems } from '../data-helper';
import MenuItem from './leftside/MenuItem';

const LeftSide = () => {

  const [expanded, setExpanded] = useState(localStorage.getItem('side-expanded') === 'true');

  const toggleExpansion = () => {
    localStorage.setItem('side-expanded', `${expanded ? 'false' : 'true'}`)
    setExpanded(!expanded);
  };

  return (
    <div className='left-container' >
      {leftMenuItems.map((item, index) => (<MenuItem key={index} title={item.title} showTitle={expanded} linkTo={item.link} />))}
      <button className='sider-controller' onClick={toggleExpansion}> {expanded ? '<' : '>'} </button>
    </div >
  );
};

export default LeftSide;