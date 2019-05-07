import React from 'react';
import './nav.css'
import { animations } from './styles'
import { Link } from 'react-router-dom'
import Radium from 'radium'

const NavMenu = (props) => {

const handleClick = () => {
  props.toggle()
}

  return (
    <div className="overlay" onClick={handleClick}>
      <div className="overlay-content">
        <a style={animations.fadeHome}> <Link to="/">HOME</Link> </a>
        <a style={animations.fadeAbout}> <Link to="/about">ABOUT</Link> </a>
        <a style={animations.fadePortfolio}> <Link to="/portfolio">PORTFOLIO</Link> </a>
        <a style={animations.fadeResume}> <Link to="/resume">RESUME</Link> </a>
        <a style={animations.fadeContact} href="https://medium.com/@asabogal">BLOG</a>
      </div>
    </div>
  );
};

export default Radium(NavMenu);
