import { query } from '../database';

export class Transactions {
  static create(obj: any) {
    var values = [obj.payee, obj.referenceNumber, obj.date, obj.cleared, obj.paymentAmount, obj.depositAmount];
    query(`INSERT INTO transactions("payee", "referenceNumber", "date", "cleared", "paymentAmount", "depositAmount") VALUES($1, $2, $3, $4, $5, $6)`, values, function(err: any, res: any) {
    });
  }

  static find(callback: any) {
    var select = `SELECT "id", "payee", "referenceNumber", "date", "cleared", "paymentAmount", "depositAmount" FROM "transactions"`;

    query(select, [], function(err: any, res: any) {
      callback.call(this, err, res.rows);
    });
  }
}
