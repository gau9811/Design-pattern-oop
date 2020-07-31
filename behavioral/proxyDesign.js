//  this proxy design sit in the middle of an api and the user an it store the that has already been called before so it don't have to call again and again before it call once

//  i am creating my own api
// it can use to reduce the latency in a network
class cryptoCurrencyApi {
  getValue(coin) {
    console.log("calling an externel api")
    switch (coin) {
      case "Bitcoin":
        return "$750"
      case "Litecoin":
        return "$50"
      case "Etherum":
        return "$175"
      default:
        break
    }
  }
}
// const api = new cryptoCurrencyApi()
//////////////////////
//console.log("----------without proxy---------")
// console.log(api.getValue("Bitcoin"))
// console.log(api.getValue("Litecoin"))
// console.log(api.getValue("Ethereum"))
// console.log(api.getValue("Bitcoin"))
// console.log(api.getValue("Litecoin"))
// console.log(api.getValue("Ethereum"))

class CryptocurrencyProxy {
  constructor() {
    this.api = new cryptoCurrencyApi()
    this.cache = {}
  }

  getValue(coin) {
    if (this.cache[coin] == null) {
      this.cache[coin] = this.api.getValue(coin)
    }
    return this.cache[coin]
  }
}

// console.log("----------With Proxy----------")
const proxy = new CryptocurrencyProxy()

console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Litecoin"))
console.log(proxy.getValue("Ethereum"))
console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Litecoin"))
console.log(proxy.getValue("Ethereum"))
