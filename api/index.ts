import * as express from 'express';
import { Transactions } from './app/models/transactions';

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

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
