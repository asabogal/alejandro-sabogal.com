import React, { Component } from 'react';
import NavHeader from '../navigation/NavHeader';
import SideNavigation from '../navigation/SideNavigation';
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
    let sideNav;
    let backdrop;

    if (this.state.sideOpen) {
      sideNav = <SideNavigation/>
      backdrop = <Backdrop click={this.closeSideNav}/>
    };

    return (
      <div>
        <NavHeader toggleSideNav={this.toggleSideNav}/>
        {sideNav}
        {backdrop}
        {this.props.children}
      </div>
    );
  };
};

export default Layout;