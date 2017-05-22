'option strict';

import * as React from 'react'
import { Transaction } from '../models/transaction'
import { TransactionsTable } from './TransactionsTable'

export class TransactionsIndexPage extends React.Component<any, any> {
  constructor(props : {}) {
    super(props)
    this.state = {
      transactions: []
    }
  }

  componentDidMount() {
    let transactions : Transaction[] = [
      { id: 1, payee: "Livingoods" }
    ];

    this.setState({ transactions });
  }

  render() {
    return (
      <TransactionsTable transactions={this.state.transactions} />
    );
  }
}
