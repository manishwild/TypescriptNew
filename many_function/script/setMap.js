"use strict";
const mySet = Object.create(null);
mySet.id = 1;
if (mySet.id) {
    console.log('Id exists');
}
const myMap = Object.create(null);
myMap.name = 'Mani';
const val = myMap.name;
console.log(val);
myMap[100] = 'Hello';
console.log(myMap['100']);
let obj1 = {};
let obj2 = {};
myMap[obj1] = 'World';
