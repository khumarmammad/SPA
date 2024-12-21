import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <ul>
      <li><Link to="/">Clock</Link></li>
      <li><Link to="/stopwatch">Stopwatch</Link></li>
      <li><Link to="/timer">Timer</Link></li>
    </ul>
  </nav>
);

export default Header;