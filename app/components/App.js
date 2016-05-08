import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <ul>
      <li><Link to="/page-1">Page 1</Link></li>
      <li><Link to="/page-2">Page 2</Link></li>
    </ul>

    <div>{ children }</div>
  </div>
);

export default App;