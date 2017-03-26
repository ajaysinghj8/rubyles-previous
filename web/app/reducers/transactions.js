'option strict';

import * as types from '../constants/ActionTypes'

const initialState = {
  transactions: []
}

function transactions(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TRANSACTION:
      return { transactions: state.transactions.concat(action.transaction) };
    default:
      return state;
  }
}

module.exports = transactions
