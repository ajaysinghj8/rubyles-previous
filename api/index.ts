import * as express from 'express';
import showAllTransactions from './lib/transactions/transactionsInteractor';
import * as TransactionsGateway from './lib/transactions/transactionsGateway';

const API_PORT : number = 8080;

let app = express();

function addAccessHeaders(req: any, res: any, next: any) {
  res.append('Access-Control-Allow-Origin', '*');
  next();
}

function asJson(action: any) {
  return function(req: any, res: any) {
    action(function(data: any) {
      res.json(data);
    });
  }
}

app.use(addAccessHeaders);
app.get('/transactions', asJson(showAllTransactions));

app.listen(API_PORT, function () {
  TransactionsGateway.create({payee: 'test'})
  console.log(`Rubyles API running on port ${API_PORT}!`)
})
