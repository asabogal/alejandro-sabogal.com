import React from 'react';
import './nav.css'
import { animations } from './styles'
import Radium from 'radium'

const NavMenu = (props) => {

const handleClick = () => {
  props.toggle()
}

  return (
    <div className="overlay" onClick={handleClick}>
      <div className="overlay-content">
        <a style={animations.fadeHome} href="#">HOME</a>
        <a style={animations.fadeAbout} href="#">ABOUT</a>
        <a style={animations.fadePortfolio} href="#">PORTFOLIO</a>
        <a style={animations.fadeResume} href="#">RESUME</a>
        <a style={animations.fadeContact} href="#">CONTACT</a>
      </div>
    </div>
  );
};

export default Radium(NavMenu);