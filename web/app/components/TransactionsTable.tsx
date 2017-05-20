'option strict';

import * as React from 'react'
import TransactionRow from './TransactionRow'

export default function TransactionsTableComponent({ transactions }: any, props: any) {
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
        { transactions.map((transaction: any) =>
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
