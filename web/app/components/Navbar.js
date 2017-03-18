import React from 'react';
import { Link, NavLink } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Rubyles</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><NavLink exact to="/transactions" activeClassName="active">Transactions</NavLink></li>
              <li><NavLink exact to="/transactions/new" activeClassName="active">New Transaction</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

module.exports = Navbar;
