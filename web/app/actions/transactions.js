'option strict';

import * as types from '../constants/ActionTypes'

const addTransaction = (transaction) => ({ type: types.ADD_TRANSACTION, transaction: transaction })

module.exports = addTransaction;
