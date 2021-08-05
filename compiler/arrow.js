"use strict";
const getArrowValue = m => 10 * m;
// console.log(getArrowValue)
console.log(getArrowValue(5));
const getArrowValue1 = (m, b) => 10 * m + b;
// console.log(getArrowValue)
console.log(getArrowValue1(5, 50));
console.log(typeof getArrowValue1);
// const add = (a: number, b: number) => a + b
// const printOutput = (a: number | string) => void = output => console.log(output)
// printOutput(add(1,5))
// //console.log(add(1, 5))
