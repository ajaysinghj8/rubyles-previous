import * as React from 'react';
import {shallow} from 'enzyme';
import TransactionRow from './TransactionRow';

describe('TransactionRow', function() {
  it('renders a transaction row', function() {
    var transaction = {
      referenceNumber: '1234',
      date: '2017-06-23',
      payee: 'Livingoods',
      cleared: true,
      paymentAmount: 1001,
      depositAmount: 1002,
      balance: 1357
    }

    const transactionRow = shallow(
      <TransactionRow transaction={ transaction }></TransactionRow>
    );

    transactionRow.role = function(roleName) {
      return this.find(`td[data-role="${roleName}"]`)
    }.bind(transactionRow);

    expect(transactionRow.role("transactionReferenceNumber").text()).toEqual('1234');
    expect(transactionRow.role("transactionDate").text()).toEqual('2017-06-23');
    expect(transactionRow.role("transactionPayee").text()).toEqual('Livingoods');
    expect(transactionRow.role("transactionCleared").text()).toEqual('true');
    expect(transactionRow.role("transactionPaymentAmount").text()).toEqual('1001');
    expect(transactionRow.role("transactionDepositAmount").text()).toEqual('1002');
    expect(transactionRow.role("transactionBalance").text()).toEqual('1357');
  });
});
