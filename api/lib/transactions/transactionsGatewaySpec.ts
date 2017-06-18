import Transaction from './transaction'
import * as TransactionsGateway from './transactionsGateway';
import { assert } from 'chai';
import 'mocha';
//TODO: Decide if callback is way to go, or if should use promise or RXjs
//TODO: Share Transaction "model" between API and web?`
describe('TransactionsGateway', function() {
  describe('.findAll', function() {
    it('returns an empty array when no transactions exist', function(done: any) {
      TransactionsGateway.findAll(function(transactions: Transaction[]) {
        assert.equal(transactions.length, 0);
        done();
      });
    });

    it('returns transactions that do exist', function(done: any) {
      //TODO: Clear this transaction after test
      TransactionsGateway.create({
        payee: 'Butcher Block',
        referenceNumber: '1234',
        date: new Date('2017-06-01'),
        cleared: true,
        paymentAmount: 1001,
        depositAmount: 1002,
      });
      TransactionsGateway.findAll(function(transactions: Transaction[]) {
        let transaction = transactions[0];

        assert.equal(transactions.length, 1);
        assert.equal(transaction.payee, 'Butcher Block');
        assert.equal(transaction.referenceNumber, '1234');
        assert.equal(transaction.date.toUTCString(), new Date('2017-06-01').toUTCString());
        assert.equal(transaction.paymentAmount, 1001);
        assert.equal(transaction.depositAmount, 1002);
        assert.isTrue(transaction.cleared);
        done();
      });
    });
  });
});
