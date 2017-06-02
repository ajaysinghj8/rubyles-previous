import { Transactions } from './transactions';
import { expect } from 'chai';
import { query } from '../database';
import 'mocha';
//TODO: Replace all references to 'any'
//TODO: Decide if callback is way to go, or if should use promise or RXjs
//TODO: Log somewhere else?
//TODO: You sure you don't want to use an ORM?
describe('Transactions', function() {
  beforeEach(function(done) {
    query(`DELETE FROM transactions`, [], function() { done()});
  });

  describe('.find', function() {
    it('returns an empty array when no transactions exist', function(done: any) {
      Transactions.find(function(err: any, transactions: any) {
        expect(transactions.length).to.equal(0);
        done();
      });
    });

    it('returns transactions that do exist', function(done: any) {
      Transactions.create({
        payee: "Butcher Block"
      });
      Transactions.find(function(err: any, transactions: any) {
        expect(transactions.length).to.equal(1);
        expect(transactions[0].payee).to.equal('Butcher Block');
        done();
      });
    });
  });
});
