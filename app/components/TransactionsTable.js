import React from 'react';
import TransactionRow from './TransactionRow'

class TransactionsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [
        {
          id: 1,
          payee: 'Livingoods',
          referenceNumber: 1,
          date: '',
          cleared: false,
          paymentAmount: null,
          depositAmount: 10012,
          balance: 10013,
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Rubyles</h1>
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
    </div>
    );
  }
}

module.exports = TransactionsTable;
