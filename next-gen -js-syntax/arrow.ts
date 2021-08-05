const add2 = (a: number, b: number) => a + b

const printOutput: (a: number | string) => void = output => console.log(output)
printOutput(add2(1, 5))

// console.log(add2(1, 5))
