'option strict';

import React from 'react';
import TransactionRow from './TransactionRow';
import { connect } from 'react-redux';

const TransactionsTableComponent = ({ transactions }) => {
  return (
    <table className="table table-striped table-hover table-condensed">
      <thead>
        <tr>
          <th>Ref #</th>
          <th>Date</th>
          <th>Payee</th>
          <th>Cleared?</th>
          <th>Payment</th>
          <th>Deposit</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        { transactions.map((transaction) => <TransactionRow key={transaction.id} transaction={transaction}></TransactionRow>) }
      </tbody>
    </table>
  );
}

function mapStateToProps(state) {
  return { transactions: state.transactions }
}

export default connect(
  mapStateToProps
)(TransactionsTableComponent);
