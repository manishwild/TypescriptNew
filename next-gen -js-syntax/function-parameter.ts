/* eslint-disable no-unused-vars */
const adds = (a: number, b: number = 1) => a + b

const printOutput1: (a: number | string) => void = output => console.log(output)

printOutput1(adds(5))

// spread operator

const hobbies = ['Sports', 'Cooking']
const activeHobbies = ['hiking']
// const activeHobbies = ['hiking', ...hobbies]
activeHobbies.push(...hobbies)
// console.log(hobbies[0])

const person = {
  name: 'mani',
  age: 30
}

const copiedPerson = { ...person }
