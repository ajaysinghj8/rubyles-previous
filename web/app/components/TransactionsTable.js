'option strict';

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TransactionRow from './TransactionRow'
import * as TransactionActions from '../actions/transactions'

function TransactionsTableComponent({ transactions, actions }) {
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
        { transactions.map((transaction) =>
          <TransactionRow
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={actions.deleteTransaction}
          />)
        }
      </tbody>
    </table>
  );
}

function mapStateToProps(state) {
  return {
    transactions: state.transactions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TransactionActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsTableComponent);
