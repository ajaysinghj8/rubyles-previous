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
    fetch("http://127.0.0.1:8080/transactions").then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({ transactions: data.transactions });
    });
  }

  render() {
    return (
      <TransactionsTable transactions={this.state.transactions} />
    );
  }
}
