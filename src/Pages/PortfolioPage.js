import React from 'react';
import NavHeader from '../Components/Navigation/NavHeader'
import Footer from '../Components/Footer/Footer'
import Portfolio from '../Containers/Portfolio'

const PortfolioPage = () => {

  return (
    <div >
      <NavHeader/>
      <Portfolio/>
      <Footer/>
    </div>
      
  );
};

export default PortfolioPage;