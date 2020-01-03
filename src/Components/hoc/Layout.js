import React, { Component } from 'react';
import NavHeader from '../navigation/NavHeader';
import SideNavigation from '../navigation/SideNavigation';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <NavHeader/>
        <SideNavigation/>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;