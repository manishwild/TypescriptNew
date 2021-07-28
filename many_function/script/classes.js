"use strict";
class Person {
    greet() { }
}
const p = new Person();
// console.log(typeof Person)
console.log(p.greet === Person.prototype.greet);
