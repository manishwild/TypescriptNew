/* eslint-disable no-unused-vars */
// it will merge all incoming value
const ad = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0)
}

const addNumber = ad(5, 10, 2, 3.7)
console.log(addNumber)

// array & object destrucring

const hobbie = ['Sports', 'Cooking']
const activeHobbie = ['hiking']
activeHobbie.push(...hobbie)

// const hobby1 = hobbie[0]
// const hobby2 = hobbie[1]

const [hobby1, hobby2, ...remainingHobbies] = hobbie
console.log(hobbie, hobby1, hobby2)

const persons = {
  firstName: 'mani',
  ag: 30
}

const { firstName, ag } = persons
console.log(persons, firstName, ag)
