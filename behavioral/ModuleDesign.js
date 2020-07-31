// class testModule {
//   constructor() {
//     this.counter = 0
//   }

//   incrementCounter() {
//     return this.counter++
//   }

//   resetCounter() {
//     console.log("counter value prior is reset:" + this.counter)
//     return (this.counter = 0)
//   }
// }

// var counter = new testModule()

// console.log(counter.incrementCounter())
// console.log(counter.incrementCounter())

class myNamespace {
  constructor() {
    this.myPrivateVar = 0
    this.myPublicVar = "foo"
  }
  myPrivateMethod(someText) {
    console.log(someText)
  }

  myPublicMethod(bar) {
    this.myPrivateVar = this.myPrivateVar++
    this.myPrivateMethod(bar)
  }
}
