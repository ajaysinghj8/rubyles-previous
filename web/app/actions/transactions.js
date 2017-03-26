'option strict';

import * as types from '../constants/ActionTypes'

export function addTransaction(transaction) {
  return {
    type: types.ADD_TRANSACTION,
    transaction: transaction
  }
}

export function deleteTransaction(id) {
  return {
    type: types.DELETE_TRANSACTION,
    id: id
  }
}
