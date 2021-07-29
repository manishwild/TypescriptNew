"use strict";
let s = Symbol('First Symbol');
console.log(typeof s);
console.log(s.toString());
let s2 = Symbol('Test');
let s3 = Symbol('Test');
// symbol will always create unique id
console.log(s2 === s3);
let s4 = Symbol.for('RegSymbol');
let s5 = Symbol.for('RegSymbol');
// it will return as true
console.log(s4 === s5);
console.log(Symbol.keyFor(s4));
let fname = Symbol('FirstName');
let person = {
    [fname]: 'manis'
};
console.log(person[fname]);
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
