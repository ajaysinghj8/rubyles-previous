import { query } from '../database';

export class Transactions {
  static All(callback) {
    var select = 'SELECT "id", "payee", "referenceNumber", "date", "cleared", "paymentAmount", "depositAmount" FROM "transactions"';
    query(select, [], function(err, res) {
      callback.call(this, err, res.rows);
    });
  }
}
