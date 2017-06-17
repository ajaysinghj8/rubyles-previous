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

export default function transactionsIndex(request: any, response: JsonResponse, repository: RubylesRepo) {
  response.append('Access-Control-Allow-Origin', '*');

  repository.findAll(function(transactions: Transaction[]) {
    response.json({ transactions });
  });
}
