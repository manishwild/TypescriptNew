"use strict";
// for.of --> iterator method --> smbol.iterator
let str = 'Hello';
let arr = [1, 2, 3];
let num = 5;
let obj = { name: 'mani' };
console.log('For string ' + typeof str[Symbol.iterator]);
console.log('For array ' + typeof arr[Symbol.iterator]);
console.log('For number ' + typeof num[Symbol.iterator]);
console.log('For object ' + typeof obj[Symbol.iterator]);
