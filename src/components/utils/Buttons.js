import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const BurgerButton = (props) => {
  return (
    <div style={{cursor: 'pointer'}}>
      <FontAwesomeIcon 
        icon={faBars} 
        size={props.size} 
        color={props.color}
        onClick={props.click}
      />
    </div>
  );
}