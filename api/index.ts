import * as express from 'express';
import { Transactions } from './app/models/transactions';

const API_PORT : number = 8080;

var app = express()

app.get('/transactions', function (request: any, response: any) {
  response.append('Access-Control-Allow-Origin', '*');

  Transactions.All(function(err: any, transactions: any) {
    if(err) {
      return console.error('error running query', err);
    }

    response.json({ transactions });
  });
})

app.listen(API_PORT, function () {
  console.log(`Rubyles API running on port ${API_PORT}!`)
})
