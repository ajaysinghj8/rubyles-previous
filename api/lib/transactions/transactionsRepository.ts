import Transaction from './transaction'

var transactions: Transaction[] = [];

export function create(transaction: Transaction): void {
  transactions.push(transaction);
}

export function findAll(callback: any): void {
  callback.call(this, transactions);
}
