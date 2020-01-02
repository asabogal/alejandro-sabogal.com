import React from './node_modules/react';
import { header } from './styles'
import Radium from './node_modules/radium'
import NavMenu from './NavMenu'
import NavButton from './NavButton'
import './nav.css'

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
      <div style={header}>
        {this.renderMenu()}
        {this.props.children}
      </div>
    );
  }
}

export default Radium(NavHeader);