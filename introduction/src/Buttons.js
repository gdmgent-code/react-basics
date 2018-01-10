import React, { Component } from 'react';

export class LoginButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={ this.props.onClick }>
        Login
      </button>
    );
  }
}

export class LogoutButton extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <button onClick={ this.props.onClick }>
        Logout
      </button>
    );
  }
}