import React from 'react';
import NavHeader from '../Components/Navigation/NavHeader'
import Footer from '../Components/Footer/Footer'
import Portfolio from '../Containers/Portfolio'
import Exercises from '../Containers/Exercises'

const PortfolioPage = () => {

  return (
    <div >
      <NavHeader/>
      <Portfolio/>
      <Exercises/>
      <Footer/>
    </div>
      
  );
};

export default PortfolioPage;