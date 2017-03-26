'option strict';

import * as types from '../constants/ActionTypes'

const initialState = {
  transactions: [
    { id: 1, payee: 'Burger King', paymentAmount: 100 },
    { id: 2, payee: 'Livingoods', paymentAmount: 100 },
    { id: 3, payee: 'Dinos', paymentAmount: 100 }
  ]
}

function transactions(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TRANSACTION:
      return { transactions: [ ...state.transactions, action.transaction ] };
    case types.DELETE_TRANSACTION:
      return { transactions: state.transactions.filter(transaction => (transaction.id !== action.id)) };
    default:
      return state;
  }
}

module.exports = transactions
