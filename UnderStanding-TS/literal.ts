// Literal types
// union type eg. resultCoversion: 'as-number' | 'as-text'
type Combinable = number | string // resuable Type Aliases

function combine (input1: Combinable, input2: Combinable, resultCoversion: 'as-number' | 'as-text') {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultCoversion === 'as-number') {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
//   if (resultCoversion === 'as-number') {
//     return +result
//     // return parseFloat(result)
//   } else {
//     return result.toString()
//   }
}

const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges)

const combinedStringAges = combine('30', '26', 'as-number')
console.log(combinedStringAges)

const combineName = combine('Manish', 'Preety', 'as-text')
console.log(combineName)
