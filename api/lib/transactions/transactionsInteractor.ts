import * as TransactionsGateway from './transactionsGateway';
import Transaction from './transaction'

interface EntityGateway {
  findAll(callback: any): void
}

function showAllTransactions(callback: any, repository: EntityGateway = TransactionsGateway): void {
  repository.findAll(function(transactions: Transaction[]) {
    callback({ transactions });
  });
}

export default showAllTransactions;
