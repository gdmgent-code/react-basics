import React, { Component } from 'react';

class ToggleButton extends Component {
  constructor(props) {
    super(props);

    this.state = { isToggleOn: false };
  }

  componentDidMount() {
    console.log('Welcone component is mounted!');
  }

  componentWillUnmount() {
  }

  handleClick = (ev) => {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
  }

  render() {
    return (
        <button onClick={(ev) => this.handleClick(ev)}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
    );
  }
}

export default ToggleButton;
