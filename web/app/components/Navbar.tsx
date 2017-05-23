import * as React from 'react';
import { Link, NavLink } from 'react-router-dom'

export default class Navbar extends React.Component<undefined, undefined> {
  render() {
    return (
      <ul>
        <li><Link to="/">Rubyles</Link></li>
        <li><NavLink exact to="/transactions">Transactions</NavLink></li>
        <li><NavLink exact to="/transactions/new">New Transaction</NavLink></li>
      </ul>
    );
  }
}
