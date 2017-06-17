import * as express from 'express';
import transactionsIndex from './lib/transactions/transactionsController';
import * as TransactionsRepository from './lib/transactions/transactionsRepository';

const API_PORT : number = 8080;

var app = express()

app.get('/transactions', transactionsIndex);

app.listen(API_PORT, function () {
  TransactionsRepository.create({payee: 'test'})
  console.log(`Rubyles API running on port ${API_PORT}!`)
})
