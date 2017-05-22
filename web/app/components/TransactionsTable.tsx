'option strict';

import * as React from 'react'
import { Transaction } from '../models/transaction'
import TransactionRow from './TransactionRow'

export interface ITransactionsTableProps {
  transactions: Transaction[]
}

export class TransactionsTable extends React.Component<ITransactionsTableProps, {}> {
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
          { this.props.transactions.map((transaction: any) =>
          <TransactionRow
            key={transaction.id}
            transaction={transaction}
            />)
            }
          </tbody>
        </table>
    );
  }
}
