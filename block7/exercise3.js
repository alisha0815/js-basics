class BankAccount {
  constructor(amount = 0) {
    this.total = amount;
  }
  deposit(value) {
    this.total += value;
  }
  withdraw(value) {
    this.total -= value;
  }
  balance() {
    return this.total;
  }
}
module.exports = {
  BankAccount,
};
