"use strict";
const getValue = function (value = 10, bonus = 5) {
    console.log(value + bonus);
    console.log(arguments.length);
};
getValue();
getValue(20);
getValue(20, 30);
getValue(undefined, 30);
const add1 = (a, b = 1) => a + b;
const printOutput1 = (a) => void , output;
console.log(output);
printOutput1(add1(5));
//console.log(add(5))
