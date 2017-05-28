import { query } from '../database';

export class Transactions {
  static All(callback: any) {
    var select = 'SELECT "id", "payee", "referenceNumber", "date", "cleared", "paymentAmount", "depositAmount" FROM "transactions"';
    query(select, [], function(err: any, res: any) {
      callback.call(this, err, res.rows);
    });
  }
}
