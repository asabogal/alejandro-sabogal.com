import React from 'react';
import './footer.css'

import email from './Icons/email.png'
import github from './Icons/github.png'
import linkedin from './Icons/linkedin.png'

const Footer = () => {

  return (
    <div className="footer">
      
      <a href="mailto:asabogal.dev@gmail.com" target="_blank">
      <img className="footer-icon" src={email}></img>
      </a>

      <a href="https://github.com/asabogal" target="_blank">
      <img className="footer-icon" src={github}></img>
      </a>
      
      <a href="http://www.linkedin.com/in/alejandro-sabogal-dev" target="_blank">
      <img className="footer-icon" src={linkedin}></img>
      </a>
    </div>
  );
};

export default Footer;