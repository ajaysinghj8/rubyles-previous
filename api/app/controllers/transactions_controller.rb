class TransactionsController < ApplicationController
  def index
    transaction1 = { id: 1, payee: "Livingoods" }
    transaction2 = { id: 2, payee: "Bazzanos" }

    render json: { transactions: [transaction1, transaction2] }
  end
end
