"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var button = document.querySelector('button');
var input1 = document.querySelector('num1');
var input2 = document.querySelector('num2');

function add(num1, num2) {
  if (typeof num === "undefined" ? "undefined" : _typeof(num)) {} else {}

  return num1 + num2;
}

button.addEventListener('click', function () {
  console.log(add(input1.value, input2.value));
});