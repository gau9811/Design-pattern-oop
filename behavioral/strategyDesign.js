// this pattern encapsulate all method in single method

class Fedex {
  calculate() {
    // the Fedex strategy
    return 1000
  }
}

class DHL {
  calculate(pkg) {
    // The DHL startegy
    return 800
  }
}

class UPS {
  calculate() {
    // The UPS strategy
    return 1100
  }
}

class Shipping {
  constructor() {
    this.company = null
  }

  setStrategy(company) {
    return (this.company = company)
  }

  calculate(pkg) {
    return this.company.calculate(pkg)
  }
}

const fedex = new Fedex()
const dhl = new DHL()
const ups = new UPS()
const shipping = new Shipping()
const pkg = {from: "Delhi", to: "Banglore", weight: 1.56} // Dummy package

shipping.setStrategy(dhl)
console.log("DHL: " + shipping.calculate(pkg))
console.log(shipping.calculate())
