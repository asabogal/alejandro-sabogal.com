import React from 'react';
import './nav.css'

const NavMenu = (props) => {

const handleClick = () => {
  props.toggle()
}

  return (
    <div className="overlay" onClick={handleClick}>
      <div className="overlay-content">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">PORTFOLIO</a>
        <a href="#">RESUME</a>
      </div>
    </div>
  );
};

export default NavMenu;