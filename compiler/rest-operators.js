"use strict";
const displayColor = function () {
    console.log(message);
    for (const i in arguments) {
        console.log(arguments[i]);
    }
};
const message = 'List od Colors';
displayColor(message, 'Red');
displayColor(message, 'Red', 'Blue');
displayColor(message, 'Red', 'Blue', 'Green');
// es15
const displayColor1 = function (message, ...colors) {
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    for (const i in colors) {
        console.log(colors[i]);
    }
};
const message = 'List of Colors';
displayColor1(message, 'Red');
displayColor1(message, 'Red', 'Blue');
displayColor1(message, 'Red', 'Blue', 'Green');
