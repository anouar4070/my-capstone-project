import React from 'react';
import logo from '../images/Logo.png' 

function Header() {
  return (
    <header>
      <img src={logo} className="App-logo" alt="Little Lemon Logo" />
      <h1>Little Lemon</h1>
    </header>
  );
}

export default Header;
