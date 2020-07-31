//traverse array
let items = [1, 2, 3, 4, 5, 6]
class Iterator {
  constructor(items) {
    this.items = items
    this.index = 0
  }

  hasnext() {
    return this.index < this.items.length
  }

  next() {
    return this.items[this.index++]
  }

  traverse() {
    while (this.hasnext()) {
      console.log(this.next())
    }
  }
}

// traverse back
class IteratorBack {
  constructor(items) {
    this.items = items
    this.index = this.items.length - 1
  }

  hasnext() {
    return this.index >= 0
  }

  next() {
    return this.items[this.index--]
  }

  traverseBack() {
    while (this.hasnext()) {
      console.log(this.next())
    }
  }
}

var iter = new IteratorBack(items)

iter.traverseBack()
