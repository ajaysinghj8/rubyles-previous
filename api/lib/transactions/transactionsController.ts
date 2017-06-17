import * as TransactionsRepository from './transactionsRepository';
import Transaction from './transaction'

interface JsonResponse {
  append(key: string, value: string): void;
  json(data: any): void;
}

//TODO: Make the actual repo implement this interface.
interface RubylesRepo {
  findAll(callback: any): void
}

export default function transactionsIndex(repository: RubylesRepo, callback: any): void {
  repository.findAll(function(transactions: Transaction[]) {
    callback({ transactions });
  });
}
