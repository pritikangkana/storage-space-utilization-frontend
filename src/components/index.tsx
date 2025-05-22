import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header>
    <h2>Storage Space Utilization System</h2>
    <nav>
      <Link to="/" style={{ marginRight: 16 }}>Home</Link>
      <Link to="/files">File Manager</Link>
    </nav>
    <hr />
  </header>
);

export default Header;
