import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/swlogo.png';

function Header(props) {
  return (
    <>
      <Link to="/">
        <img src={Logo} style={{ width: props.width, height: 'auto' }} alt="Star Wars Logo" />
      </Link>
    </>
  );
}

export default Header;
