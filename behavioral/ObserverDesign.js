class Subject {
  constructor() {
    this.Observer = []
  }

  subscribe(fn) {
    return this.Observer.push(fn)
  }

  unsubscribe(fnToRemove) {
    return this.Observer.filter((fn) => {
      if (fn !== fnToRemove) {
        return fn()
      }
    })
  }

  fire() {
    this.Observer.forEach((fn) => {
      return fn.call
    })
  }
}

var subject = new Subject()

function Observer1() {
  console.log("Fire Observer1")
}

function Observer2() {
  console.log("Fire Observer2")
}

subject.subscribe(Observer1)
subject.subscribe(Observer2)
subject.unsubscribe(Observer2)
subject.fire()
