class PaymentProcessor {
  process() {
    throw new Error("Method not implemented");
  }
}

class CreditCardProcessor extends PaymentProcessor {
  process() {
    return "Processing credit card payment";
  }
}

class PayPalProcessor extends PaymentProcessor {
  process() {
    return "Processing PayPal payment";
  }
}

class ProcessorFactory {
  static createProcessor(type) {
    if (type === "credit") return new CreditCardProcessor();
    if (type === "paypal") return new PayPalProcessor();

    throw new Error("Invalid processor type");
  }
}

module.exports = ProcessorFactory;