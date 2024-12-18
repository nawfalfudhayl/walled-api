// DTO
class TransactionResponse {
  constructor(transaction) {
    this.id = transaction.id;
    this.date_time = transaction.date_time;
    this.type = transaction.type;
    this.from_to = transaction.from_to;
    this.description = transaction.description;
    this.ammount = transaction.ammount;
  }
}

module.exports = { TransactionResponse };
