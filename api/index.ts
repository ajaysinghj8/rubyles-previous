import * as express from 'express';
import transactionsIndex from './lib/transactions/transactionsController';
import * as TransactionsRepository from './lib/transactions/transactionsRepository';

const API_PORT : number = 8080;

var app = express()

function addAccessHeaders(req: any, res: any, next: any) {
  res.append('Access-Control-Allow-Origin', '*');
  next();
}

function asJson(action: any) {
  return function(req: any, res: any) {
    action(TransactionsRepository, function(data: any) {
      res.json(data);
    });
  }
}

app.use(addAccessHeaders);
app.get('/transactions', asJson(transactionsIndex));

app.listen(API_PORT, function () {
  TransactionsRepository.create({payee: 'test'})
  console.log(`Rubyles API running on port ${API_PORT}!`)
})
