import React, { Component } from 'react';

class Welcome extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('Welcone component is mounted!');
  }

  render() {
    return (
      <h1>{ this.props.name }</h1>
    );
  }
}

export default Welcome;
