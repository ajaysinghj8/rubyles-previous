import React from 'react';

class TransactionRow extends React.Component {
  render() {
    var transaction = this.props.transaction;

    return (
      <tr>
        <td>{ transaction.referenceNumber }</td>
        <td>{ transaction.date }</td>
        <td>{ transaction.payee }</td>
        <td>{ transaction.cleared }</td>
        <td>{ transaction.paymentAmount }</td>
        <td>{ transaction.depositAmount }</td>
        <td>{ transaction.balance }</td>
      </tr>
    );
  }
}

module.exports = TransactionRow;
