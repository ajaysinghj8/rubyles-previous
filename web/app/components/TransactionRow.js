'option strict';

import React from 'react';

function TransactionRow(props) {
  var transaction = props.transaction;
  var deleteTransaction = props.deleteTransaction;

  return (
    <tr>
      <td>{ transaction.referenceNumber }</td>
      <td>{ transaction.date }</td>
      <td>{ transaction.payee }</td>
      <td>{ transaction.cleared }</td>
      <td>{ transaction.paymentAmount }</td>
      <td>{ transaction.depositAmount }</td>
      <td>{ transaction.balance }</td>
      <td>
        <button className="btn-danger" onClick={() => deleteTransaction(transaction.id)}>Destroy</button>
      </td>
    </tr>
  );
}

module.exports = TransactionRow;
