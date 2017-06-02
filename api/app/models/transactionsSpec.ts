import { Transactions } from './transactions';
import { assert } from 'chai';
import { query } from '../database';
import 'mocha';
//TODO: Replace all references to 'any'
//TODO: Decide if callback is way to go, or if should use promise or RXjs
//TODO: Log somewhere else?
//TODO: You sure you don't want to use an ORM?
//TODO: If not, should I at least abstract the SQL more?
describe('Transactions', function() {
  beforeEach(function(done) {
    query(`DELETE FROM transactions`, [], function() { done()});
  });

  describe('.find', function() {
    it('returns an empty array when no transactions exist', function(done: any) {
      Transactions.find(function(err: any, transactions: any) {
        assert.equal(transactions.length, 0);
        done();
      });
    });

    it('returns transactions that do exist', function(done: any) {
      Transactions.create({
        payee: 'Butcher Block',
        referenceNumber: '1234',
        date: '2017-06-01',
        cleared: true,
        paymentAmount: 1001,
        depositAmount: 1002,
      });
      Transactions.find(function(err: any, transactions: any) {
        let transaction = transactions[0];

        //TODO: Assert about id?
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
