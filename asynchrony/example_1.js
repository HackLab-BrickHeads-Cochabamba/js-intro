const user = {
  name: 'Gonzalo',
  lastName: 'Rivero',
  getFullName () {
    return `${this.name} ${this.lastName}`
  }
}

console.log(user.getFullName())

const userV2 = {
  name: 'Gonzalo',
  lastName: 'Rivero',
  getFullName: () => {
    return `${this.name} ${this.lastName}`
  }
}


console.log(userV2.getFullName())

