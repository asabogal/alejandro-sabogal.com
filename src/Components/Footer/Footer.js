import React from 'react';
import { footerDiv, footerIcon } from './styles'

import email from './Icons/email.png'
import github from './Icons/github.png'
import linkedin from './Icons/linkedin.png'

const Footer = () => {

  return (
    <div style={footerDiv}>
      
      <a href="mailto:asabogal.dev@gmail.com">
      <img style={footerIcon} alt="contact me" src={email}></img>
      </a>

      <a href="https://github.com/asabogal" target="_blank" rel="noopener noreferrer">
      <img style={footerIcon} src={github} alt='github logo'></img>
      </a>
      
      <a href="http://www.linkedin.com/in/alejandro-sabogal-dev" target="_blank" rel="noopener noreferrer">
      <img style={footerIcon} src={linkedin} alt='linkedin logo'></img>
      </a>
    </div>
  );
};

export default Footer;