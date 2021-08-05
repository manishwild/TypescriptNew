"use strict";
// rest opt will combine and spread will split
const displayColor1 = function (message, ...colors) {
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    for (const i in colors) {
        console.log(colors[i]);
    }
};
const message = 'List of Colors';
const colorArray = ['orange', 'Yellow', 'Brown'];
displayColor1(message, ...colorArray);
// displayColor1(message, 'Red')
// displayColor1(message, 'Red', 'Blue')
// displayColor1(message, 'Red', 'Blue', 'Green')
const hobbies = ['Sport', 'Cooking'];
const activeHobbies = ['Hiking'];
// const activeHobbies = ['Hiking', ...hobbies] // this way also we can use spread operator
activeHobbies.push(...hobbies);
const person1 = {
    name: 'Mani',
    age: 30
};
const copiedPerson = Object.assign({}, person1); //perfect copy
