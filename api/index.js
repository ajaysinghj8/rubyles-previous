var express = require('express')
var app = express()

app.get('/transactions', function (req, res) {
  res.append('Access-Control-Allow-Origin', '*');
  res.json({
    transactions: [
      {
        id: 1,
        payee: "Livingoods",
        referenceNumber: "1234",
        date: "2017-05-22",
        cleared: true,
        paymentAmount: 1000,
        depositAmount: 0,
        balance: -1000
      },
      {
        id: 2,
        payee: "Liaison",
        referenceNumber: "1235",
        date: "2017-05-21",
        cleared: false,
        paymentAmount: 0,
        depositAmount: 1000,
        balance: 1000
      }
    ]
  });
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
