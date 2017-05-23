'option strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import Routes from './routes';

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Routes />
    </div>
  </Router>,
  document.getElementById('app')
);
