import React from 'react';
import { Route } from 'react-router-dom'

import TransactionForm from './components/TransactionForm';
import TransactionsTable from './components/TransactionsTable';

var Routes = function() {
  return (
    <div>
      <Route exact path="/" component={ TransactionsTable }/>
      <Route exact path="/transactions" component={ TransactionsTable }/>
      <Route path="/transactions/new" component={ TransactionForm }/>
    </div>
  );
}

module.exports = Routes;
