import transactionsIndex from './transactionsController';
import { assert } from 'chai';
import 'mocha';
import mockResponse from '../specHelpers/mockResponse';
import mockRepo from '../specHelpers/mockRepo';

describe('TransactionsController', function() {
  describe('transactionsIndex', function() {
    it('returns all transactions', function() {
      var transaction = { payee: 'test' };
      mockRepo.items.push(transaction);

      transactionsIndex(null, mockResponse, mockRepo);

      assert.equal(mockResponse.headers['Access-Control-Allow-Origin'], '*');
      assert.deepEqual(mockResponse.body, { transactions: [transaction] });
    });
  });
});
