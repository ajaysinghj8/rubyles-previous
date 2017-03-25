var express = require('express')
var app = express()

app.get('/transactions', function (req, res) {
  res.append('Access-Control-Allow-Origin', '*');
  res.json({
    transactions: [
      {
        id: 1,
        payee: "Livingoods"
      },
      {
        id: 2,
        payee: "Bazzanos"
      }
    ]
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
