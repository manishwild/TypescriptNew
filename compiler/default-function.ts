const getValue = function (value = 10, bonus = 5) {
  console.log(value + bonus)
  console.log(arguments.length)
}
getValue()
getValue(20)
getValue(20, 30)
getValue(undefined, 30)


const add1 = (a: number, b: number = 1) => a + b
const printOutput1 = (a: number | string) => void = output => console.log(output)
printOutput1(add1(5))
//console.log(add(5))