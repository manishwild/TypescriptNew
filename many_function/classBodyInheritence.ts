class Person {
  letructor (name) {
    this.name = name
    console.log(this.name + ' constructor')
  }

  static staticMethod () {
    console.log('Static Method')
  }

  // prototype method
  greetPerson () {
    console.log('hello ' + this.name)
  }
}
let p = new Person('mani')
Person.staticMethod()
p.greetPerson()
