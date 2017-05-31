import { Transactions } from './transactions';
import { expect } from 'chai';
import 'mocha';
//TODO: Replace all references to 'any'
//TODO: Decide if callback is way to go, or if should use promise or RXjs
describe('Transactions', function() {
  it('.find returns an empty array when no transactions exist', function(done: any) {

    // Transactions.create({
    //   payee: "Butcher Block"
    // });

    Transactions.find(function(err: any, transactions: any) {
      expect(transactions.length).to.equal(0);
      done();
    });
  });
});
