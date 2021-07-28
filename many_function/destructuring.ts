let employee = ['Mani', 'Shahi', 'Male']
//destructuring
// let [fname, lname, gender] = employee
let [fname, ...elements] = employee

console.log(fname)
// console.log(lname)
// console.log(gender)
console.log(elements)