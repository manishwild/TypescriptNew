"use strict";
// rest opt will combine and spread will split
let displayColor1 = function (message, ...colors) {
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    for (let i in colors) {
        console.log(colors[i]);
    }
};
let message = 'List of Colors';
let colorArray = ['orange', 'Yellow', 'Brown'];
displayColor1(message, ...colorArray);
// displayColor1(message, 'Red')
// displayColor1(message, 'Red', 'Blue')
// displayColor1(message, 'Red', 'Blue', 'Green')
