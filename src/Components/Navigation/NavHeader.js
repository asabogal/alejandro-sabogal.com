import React from 'react';
import navIcon from './Icons/arrowDown.png'
import { navHeader, animations } from './styles'
import Radium from 'radium'

const NavHeader = () => {
  return (
    <div style={[navHeader.header, animations.fadeIcon]}>
      <img style={navHeader.button} src={navIcon}/>
    </div>
  );
};

export default Radium(NavHeader);