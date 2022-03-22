import React from 'react';
import Logo from '../images/swlogo.png';

function Profile(props) {
  return (
    <>  
        <h2>Profile Page</h2>
        <h4>{props.person.name}</h4>
    </>
  );
}

export default Profile;
