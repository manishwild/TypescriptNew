function greetPerson (name: string) {
  let greet
  if (name === 'manish') {
    greet = 'Hello Manish'
  } else {
    greet = 'Hi there'
  }
  console.log(greet)
}
greetPerson('manish')

var a = 1
const b = 2
if (a === 1) {
  var a = 10
  const b = 20
  console.log(a)
  console.log(b)
}
console.log(a)
console.log(b)
