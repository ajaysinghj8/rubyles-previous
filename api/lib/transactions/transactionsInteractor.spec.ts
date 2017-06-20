import showAllTransactions from './transactionsInteractor';
import Transaction from './transaction';
import mockRepo from '../specHelpers/mockRepo';

describe('TransactionsInteractor', function() {
  describe('showAllTransactions', function() {
    it('returns all transactions', function(done) {
      let transaction = { payee: 'test' };
      mockRepo.items.push(transaction);

      showAllTransactions(function(transactions: Transaction[]) {
        expect(transactions).toEqual([transaction]);
        done();
      }, mockRepo);
    });
  });
});
