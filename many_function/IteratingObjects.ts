let person = {
  fname: 'man',
  lname: 'shahi'
}
person[Symbol.iterator] = function () {
  let properties = Object.keys(person)
  let count = 0
  let isDone = false
  let next = () => {
    if (count >= properties.length) {
      isDone = true
    }
    return { done: isDone, value: this[properties[count++]] }
  }
  return { next }
}
// it will not work by default in for of
for (let p of person) {
  console.log(p)
}
