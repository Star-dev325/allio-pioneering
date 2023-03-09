import React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

const MenuItem = ({ showTitle, title, linkTo }) => {
  return (
    <NavLink to={linkTo} target='_blank'>
      <li className='menu-item tooltip'>
        {!showTitle && <span className='tooltiptext'>{title}</span>}
        <FontAwesomeIcon icon={solid('pager')} />
        {showTitle && <h2 className='menu-label'>{title}</h2>}
      </li >
    </NavLink>
  );
};

export default MenuItem;