// It is a part of creational design and pattern use to produce clean way of creating Objects

class Developer {
  constructor(name) {
    this.name = name
    this.type = "Developer"
  }
}

class Tester {
  constructor(name) {
    this.name = name
    this.type = "tester"
  }
}

class CreateEMP {
  createEmployee(name, type) {
    switch (type) {
      case 1:
        return new Developer(name)
        break
      case 2:
        return new Tester(name)
        break
    }
  }
}

function say() {
  console.log("Hi, I am " + this.name + " and I am a " + this.type)
}

let employees = []

let empFactory = new CreateEMP()

employees.push(empFactory.createEmployee("patrick", 1))

employees.forEach((emp) => {
  say.call(emp)
})
