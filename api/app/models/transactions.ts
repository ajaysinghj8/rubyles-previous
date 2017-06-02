import { query } from '../database';

export class Transactions {
  static create(obj: any) {
    query(`INSERT INTO transactions(payee) VALUES($1)`, [obj.payee], function(err: any, res: any) {
    });
  }

  static find(callback: any) {
    var select = `SELECT "id", "payee", "referenceNumber", "date", "cleared", "paymentAmount", "depositAmount" FROM "transactions"`;

    query(select, [], function(err: any, res: any) {
      callback.call(this, err, res.rows);
    });
  }
}
