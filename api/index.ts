import * as express from 'express';
import { query } from './lib/database';

var app = express()

app.get('/transactions', function (request, response) {
  var transactions = [];

  query('SELECT "id", "payee", "referenceNumber", "date", "cleared", "paymentAmount", "depositAmount" FROM "transactions"', [], function(err, res) {
    if(err) {
      return console.error('error running query', err);
    }

    transactions = res.rows;
    response.append('Access-Control-Allow-Origin', '*');
    response.json({ transactions });
  });

})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
