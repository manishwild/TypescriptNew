function add (n1: number, n2: number) {
  return n1 + n2
}
// function void does not return anything. void does not exist in javaScript
function printResult (num: number): void {
  console.log('Result: ' + num)
}
printResult(add(5, 12))
// function type n callback
function addHandle (n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}
addHandle(10, 20, (result) => {
  console.log(result)
})

let combineValue: (a: number, b: number) => number

combineValue = add
// combineValue = printResult
console.log(combineValue(8, 8))

// let someValue: undefined. in function if we use undefined we have to use return
