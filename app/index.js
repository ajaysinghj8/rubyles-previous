import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Routes from './routes';

ReactDOM.render(
  <Router>
    <div>
      <Navbar></Navbar>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Routes />
          </div>
        </div>
      </div>
    </div>
  </Router>,
    document.getElementById('app')
);
