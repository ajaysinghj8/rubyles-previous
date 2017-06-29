'option strict';

import * as React from 'react';

export default function TransactionRow(props: any) {
  var transaction = props.transaction;
  var deleteTransaction = props.deleteTransaction;

  return (
    <tr>
      <td data-role="transactionReferenceNumber">{ transaction.referenceNumber }</td>
      <td data-role="transactionDate">{ transaction.date }</td>
      <td data-role="transactionPayee">{ transaction.payee }</td>
      <td data-role="transactionCleared">{ transaction.cleared.toString() }</td>
      <td data-role="transactionPaymentAmount">{ transaction.paymentAmount }</td>
      <td data-role="transactionDepositAmount">{ transaction.depositAmount }</td>
      <td data-role="transactionBalance">{ transaction.balance }</td>
      <td data-role="transactionDestroy">
        <button onClick={() => deleteTransaction(transaction.id)}>Destroy</button>
      </td>
    </tr>
  );
}
