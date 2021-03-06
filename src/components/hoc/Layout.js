import React, { Component } from 'react';
import NavHeader from '../navigation/NavHeader';
import SideNavigation from '../navigation/SideNavigation';
import Footer from '../navigation/Footer';
import {Backdrop} from '../shared_styled/SharedStyles';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      sideOpen: false
     };
  };

  toggleSideNav = () => {
    this.setState(prevState => {
      return {sideOpen: !prevState.sideOpen};
    });
  };

  closeSideNav = () => {
    this.setState({
      sideOpen: false
    });
  };


  render() {
    let backdrop;
    if (this.state.sideOpen) {
      backdrop = <Backdrop click={this.closeSideNav}/>
    };

    return (
      <div>
        <NavHeader toggleSideNav={this.toggleSideNav}/>
        <SideNavigation open={this.state.sideOpen} click={this.closeSideNav}/>
        {backdrop}
        {this.props.children}
        <Footer/>
      </div>
    );
  };
};

export default Layout;