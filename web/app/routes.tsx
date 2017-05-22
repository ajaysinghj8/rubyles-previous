import * as React from 'react';
import { Route } from 'react-router-dom'

import TransactionForm from './components/TransactionForm';
import { TransactionsIndexPage } from './components/TransactionsIndexPage';

var Routes = function() {
  return (
    <div>
      <Route exact path="/" component={ TransactionsIndexPage }/>
      <Route exact path="/transactions" component={ TransactionsIndexPage }/>
      <Route path="/transactions/new" component={ TransactionForm }/>
    </div>
  );
}

export default Routes;
