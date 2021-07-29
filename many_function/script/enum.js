"use strict";
var EyeColor;
(function (EyeColor) {
    EyeColor[EyeColor["Brown"] = 0] = "Brown";
    EyeColor[EyeColor["Black"] = 1] = "Black";
    EyeColor[EyeColor["Blue"] = 2] = "Blue";
})(EyeColor || (EyeColor = {}));
var myEyecolor = EyeColor.Brown;
console.log(myEyecolor);
console.log(EyeColor[myEyecolor]);
