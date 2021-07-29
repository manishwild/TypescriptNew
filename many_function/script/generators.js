"use strict";
function* createGenerator() {
    yield 1;
    console.log('after 1st yield');
    yield 2;
}
const myGen = createGenerator();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
