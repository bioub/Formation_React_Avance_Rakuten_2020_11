import React, { Component } from 'react';
import './Header.css';
import UserContext from './UserContext';

class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="Header">
        <h2>MyApp (Context)</h2>
        <span>Hello {this.context.name}</span>
      </div>
    );
  }
}

Header.contextType = UserContext;

export default Header;
