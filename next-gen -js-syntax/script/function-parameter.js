"use strict";
/* eslint-disable no-unused-vars */
const adds = (a, b = 1) => a + b;
const printOutput1 = output => console.log(output);
printOutput1(adds(5));
// spread operator
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['hiking'];
// const activeHobbies = ['hiking', ...hobbies]
activeHobbies.push(...hobbies);
// console.log(hobbies[0])
const person = {
    name: 'mani',
    age: 30
};
const copiedPerson = Object.assign({}, person);
