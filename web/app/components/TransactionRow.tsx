'option strict';

import * as React from 'react';

export default function TransactionRow(props: any) {
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
        <button onClick={() => deleteTransaction(transaction.id)}>Destroy</button>
      </td>
    </tr>
  );
}
