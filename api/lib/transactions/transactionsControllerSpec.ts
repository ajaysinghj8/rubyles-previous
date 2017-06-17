import transactionsIndex from './transactionsController';
import Transaction from './transaction'
import { assert } from 'chai';
import 'mocha';
import mockRepo from '../specHelpers/mockRepo';

describe('TransactionsController', function() {
  describe('transactionsIndex', function() {
    it('returns all transactions', function(done) {
      var transaction = { payee: 'test' };
      mockRepo.items.push(transaction);

      transactionsIndex(mockRepo, function(result: any) {
        assert.deepEqual(result, { transactions: [transaction] });
        done();
      });
    });
  });
});
