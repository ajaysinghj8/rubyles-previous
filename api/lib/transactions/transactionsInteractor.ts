import * as TransactionsGateway from './transactionsGateway';
import Transaction from './transaction'

interface EntityGateway {
  findAll(callback: any): void
}

type TransactionsCallback = (transactions: Transaction[]) => void;

function showAllTransactions(callback: TransactionsCallback, repository: EntityGateway = TransactionsGateway): void {
  repository.findAll(function(transactions: Transaction[]) {
    callback(transactions);
  });
}

export default showAllTransactions;
