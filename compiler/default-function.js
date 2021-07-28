"use strict";
const getValue = function (value = 10, bonus = 5) {
    console.log(value + bonus);
    console.log(arguments.length);
};
getValue();
getValue(20);
getValue(20, 30);
getValue(undefined, 30);
