import React from 'react';
import { Link } from 'react-router-dom';
import ExternalAppLink from './ExternalAppLink';

const NavBar = () => {
  return (
    <div className='nav'>
      <ul>
         <li className='active'>
          <Link to='/remote1/'>Remote Home</Link>
        </li>
        <li className='active'>
          <Link to='/remote1/spaces'>Spaces</Link>
        </li>
        <li>
        <Link to='/remote1/people'>People</Link>
        </li>
      </ul>
      <p></p>
      <ExternalAppLink to='/' name="Host Home" />
    </div>
  );
};

export default NavBar;