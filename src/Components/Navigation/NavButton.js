import React, { Component } from 'react';
import { button } from './styles'
import navIcon from './Icons/arrowDown.png'
import Radium from 'radium'
 
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
        <img style={button} src={navIcon} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Radium(NavButton);