import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/cars">Car List</Link></li>
          <li><Link to="/add-car">Add Car</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
