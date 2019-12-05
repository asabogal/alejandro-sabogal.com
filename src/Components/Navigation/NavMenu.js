import React from 'react';
import './nav.css'
import { animations, menuList } from './styles'
import { Link } from 'react-router-dom'
import Radium from 'radium'

const NavMenu = (props) => {

const handleClick = () => {
  props.toggle()
}

  return (
    <div className="overlay" onClick={handleClick}>
      <div className="overlay-content">
        <Link style={menuList} to="/"><li style={animations.fadeHome}>HOME</li></Link>
        <Link style={menuList} to="/about"><li style={animations.fadeAbout}>ABOUT</li></Link>
        <Link style={menuList} to="/portfolio"><li style={animations.fadePortfolio}>PORTFOLIO</li></Link>
        <Link style={menuList} to="/resume"><li style={animations.fadeResume}>RESUME</li></Link>
        <a style={animations.fadeContact} href="https://medium.com/@asabogal">BLOG</a>
      </div>
    </div>
  );
};

export default Radium(NavMenu);
