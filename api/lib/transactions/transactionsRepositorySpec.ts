import * as TransactionsRepository from './transactionsRepository';
import { assert } from 'chai';
import 'mocha';
//TODO: Replace all references to 'any'
//TODO: Decide if callback is way to go, or if should use promise or RXjs
//TODO: Log somewhere else?
describe('Transactions', function() {
  describe('.find', function() {
    it('returns an empty array when no transactions exist', function(done: any) {
      TransactionsRepository.find(function(transactions: any) {
        assert.equal(transactions.length, 0);
        done();
      });
    });

    it('returns transactions that do exist', function(done: any) {
      TransactionsRepository.create({
        payee: 'Butcher Block',
        referenceNumber: '1234',
        date: new Date('2017-06-01'),
        cleared: true,
        paymentAmount: 1001,
        depositAmount: 1002,
      });
      TransactionsRepository.find(function(transactions: any) {
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
