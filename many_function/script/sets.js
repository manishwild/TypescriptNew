"use strict";
let mySet = new Set();
// set can only add unique valu diplicate will be ignore.obj gonna be unique
let obj1 = {};
let obj2 = {};
mySet.add('hello');
mySet.add(1);
// mySet.add(1)
mySet.add(obj1);
mySet.add(obj2);
console.log(mySet.size);
let newSet = new Set([1, 2, 3, 4, 4, 4]);
console.log(newSet.size);
let chainSet = new Set().add('hello').add('world');
console.log(chainSet.size);
console.log(newSet.has(1));
console.log(newSet.delete(1));
console.log(newSet.size);
