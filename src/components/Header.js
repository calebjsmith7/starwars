import React from 'react';
import Logo from '../images/swlogo.png';

function Header() {
  return (
    <>
        <img src={Logo} style={{width: 255, height: 'auto'}}/>
    </>
  );
}

export default Header;
