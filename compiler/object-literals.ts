let firstName = 'Manish'
let lastName = 'k shahi'

let person = {
  firstName,
  lastName
}
function createPerson (firstname, lastname, age) {
  let fullname = firstname + ' ' + lastname
  return {
    firstname,
    lastName,
    fullname,
    isSenior () {
      return age > 16
    }
  }
}

let p = createPerson('Preetish', 'Shahi', 12)
console.log(p.firstname)
console.log(p.lastName)
console.log(p.fullname)
console.log(p.isSenior())
// console.log(person.firstName)
// console.log(person.lastName)
