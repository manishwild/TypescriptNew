class Person {
  constructor (name) {
    console.log(name + ' Person Constructor')
  }

  getId () {
    return 10
  }
}
// inheritance
// constructor from Person is showing in class constructur using extends
// if derived class have method it will call his method othewise it will call parents method
class Employee extends Person {
  constructor (name) {
    super(name)
    console.log(name + ' Employee Constructor')
  }

  getId () {
    return super.getId()
  }
}
const e = new Employee('mani')
console.log(e.getId())
