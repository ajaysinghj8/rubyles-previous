import Transaction from './transaction'
import * as TransactionsGateway from './transactionsGateway';
//TODO: Decide if callback is way to go, or if should use promise or RXjs
//TODO: Share Transaction "model" between API and web?`
describe('TransactionsGateway', function() {
  describe('.findAll', function() {
    it('returns an empty array when no transactions exist', function(done: any) {
      TransactionsGateway.findAll(function(transactions: Transaction[]) {
        expect(transactions).toHaveLength(0);
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

        expect(transactions).toHaveLength(1);
        expect(transaction.payee).toEqual('Butcher Block');
        expect(transaction.referenceNumber).toEqual('1234');
        expect(transaction.date.toUTCString()).toEqual(new Date('2017-06-01').toUTCString());
        expect(transaction.paymentAmount).toEqual(1001);
        expect(transaction.depositAmount).toEqual(1002);
        expect(transaction.cleared).toBeTruthy;
        done();
      });
    });
  });
});
