import React from 'react';
import TransactionRow from './TransactionRow'

class TransactionsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: []
    }
  }

  componentDidMount() {
		var that = this;
    fetch('http://127.0.0.1:3000/transactions').then((response) => response.json().then(function(json) { that.setState(json)}));
  }

  render() {
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
          { this.state.transactions.map((transaction) => <TransactionRow key={transaction.id} transaction={transaction}></TransactionRow>)}
        </tbody>
      </table>
    );
  }
}

module.exports = TransactionsTable;
