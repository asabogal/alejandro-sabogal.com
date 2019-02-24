import React from 'react';
import About from '../Components/About/About'
import NavHeader from '../Components/Navigation/NavHeader'
import Footer from '../Components/Footer/Footer'
import './pages.css'


const AboutPage = () => {
  return (
    <div className="about-page">
      <NavHeader/>
      <About/>
      <Footer/>
    </div>
    
  );
};

export default AboutPage;