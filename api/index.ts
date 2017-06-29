import * as express from 'express';
import showAllTransactions from './lib/transactions/transactionsInteractor';
import * as TransactionsGateway from './lib/transactions/transactionsGateway';
import Transaction from './lib/transactions/transaction';

const API_PORT : number = 8080;

let app = express();

function addAccessHeaders(req: any, res: any, next: any) {
  res.append('Access-Control-Allow-Origin', '*');
  next();
}

app.use(addAccessHeaders);

app.get('/transactions', function(req: any, res: any) {
  showAllTransactions(function(transactions: Transaction[]) {
    res.json({ transactions });
  });
});

app.listen(API_PORT, function () {
  TransactionsGateway.create({payee: 'test', cleared: true})
  console.log(`Rubyles API running on port ${API_PORT}!`)
})
