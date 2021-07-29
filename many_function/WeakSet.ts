// let mySet = new Set()
// let key = {}
// mySet.add(key)
// console.log(mySet.size)
// key = null
// console.log(mySet.size)
// key = [...mySet[0]]

// memory is handle propely in week set
let mySet = new WeakSet()
let key = {}
mySet.add(key)
console.log(mySet.has(key))
key = null