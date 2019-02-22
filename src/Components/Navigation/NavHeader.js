import React from 'react';
import navIcon from './Icons/arrowDown.png'
import { navHeader } from './styles'

const NavHeader = () => {
  return (
    <div style={navHeader.header}>
      <img style={navHeader.button} src={navIcon}/>
    </div>
  );
};

export default NavHeader;