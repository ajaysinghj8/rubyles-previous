var transactions: any[] = [];

export function create(transaction: any) {
  transactions.push(transaction);
}

export function find(callback: any) {
  callback.call(this, transactions);
}
