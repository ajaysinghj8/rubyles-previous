'option strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Routes from './routes';
import transactions from './reducers/transactions'
import addTransaction from './actions/transactions'

let store = createStore(transactions);

store.dispatch(addTransaction({id: 1, payee: 'Burger King', paymentAmount: 100}));
store.dispatch(addTransaction({id: 2, payee: 'Livingoods', paymentAmount: 101}));

ReactDOM.render(
  <Provider store={store}>
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
    </Router>
  </Provider>,
    document.getElementById('app')
);
