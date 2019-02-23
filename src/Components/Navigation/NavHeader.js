import React from 'react';
import { header, animations } from './styles'
import Radium from 'radium'
import NavMenu from './NavMenu'
import NavButton from './NavButton'

class NavHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  renderMenu = () => {
    return this.state.isOpen ? <NavMenu toggle={this.toggle}/> : <NavButton toggle={this.toggle}/>
  }
  render() {

    return (
      <div style={[header, animations.fadeIcon]}>
        {this.renderMenu()}
      </div>
    );
  }
}

export default Radium(NavHeader);