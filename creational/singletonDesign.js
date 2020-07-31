// The singleton pattern is used for limit the number of instances to at most One.

class state {
  constructor() {
    this.newProcess = 0
  }
}

class Singleton {
  constructor() {
    this.pManager = null
  }
  createProcessManager() {
    this.pManager = new state()
    return this.pManager
  }

  getProcessManager() {
    if (!this.pManager) {
      this.pManager = new this.createProcessManager()
    }
    return this.pManager
  }
}

const processManager = new Singleton()
const processManager2 = new Singleton()

console.log(
  processManager.getProcessManager === processManager.getProcessManager
)
