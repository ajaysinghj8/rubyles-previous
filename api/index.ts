import * as express from 'express';
import * as TransactionsRepository from './lib/transactions/transactionsRepository';
import Transaction from './lib/transactions/transaction'

const API_PORT : number = 8080;

var app = express()

app.get('/transactions', function (request: any, response: any) {
  response.append('Access-Control-Allow-Origin', '*');

  TransactionsRepository.create({payee: 'test'})
  TransactionsRepository.findAll(function(transactions: Transaction[]) {
    response.json({ transactions });
  });
})

app.listen(API_PORT, function () {
  console.log(`Rubyles API running on port ${API_PORT}!`)
})
