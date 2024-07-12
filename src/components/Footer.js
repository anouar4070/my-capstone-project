import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer>
      <p>&copy; {currentYear} Little Lemon</p>
    </footer>
  );
}

export default Footer;

