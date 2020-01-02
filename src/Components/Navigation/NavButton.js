import React, { Component } from './node_modules/react';
import { button, animations } from './styles'
import navIcon from './Icons/arrowDown.png'
import Radium from './node_modules/radium'
 
class NavButton extends Component {
  constructor(props) {
    super(props);

    this.state = {  };
  }

  handleClick = () => {
    this.props.toggle()
  }

  render() {
    return (
      <div>
        <img style={[button, animations.fadeIcon]} src={navIcon} onClick={this.handleClick} alt='nav button'/>
      </div>
    );
  }
}

export default Radium(NavButton);