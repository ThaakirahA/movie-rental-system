class Payment {
  constructor(paymentId, amount) {
    this.paymentId = paymentId;
    this.amount = amount;
    this.status = "Pending";
  }

  validatePayment() {
    return this.amount > 0;
  }

  processPayment() {
    if (this.validatePayment()) {
      this.status = "Successful";
    } else {
      this.status = "Failed";
    }

    return this.status;
  }
}

module.exports = Payment;