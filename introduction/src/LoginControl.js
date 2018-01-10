import React, { Component } from 'react';
import { LoginButton, LogoutButton } from './Buttons';

class LoginControl extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoggedIn: false };
  }

  componentDidMount() {
    console.log('LoginControl component is mounted!');
  }

  componentWillUnmount() {
  }

  handleLoginClick = (ev) => {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick = (ev) => {
    this.setState({isLoggedIn: false});
}

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
      {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}
      </div>
    );
  }
}

export default LoginControl;
