"use strict";
function greetPerson(name) {
    var greet;
    if (name === 'manish') {
        greet = 'Hello Manish';
    }
    else {
        greet = 'Hi there';
    }
    console.log(greet);
}
greetPerson('manish');
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    var b_1 = 20;
    console.log(a);
    console.log(b_1);
}
console.log(a);
console.log(b);
