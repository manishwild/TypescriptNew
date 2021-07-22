// const person: {name: string, age: number} ={}
// const person: {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string]
// } = {
//   name: 'Manish',
//   age: 35,
//   hobbies: ['sports', 'Cooking'],
//   role: [2, 'author']
// }

// const Admin = 0
// const Read_Only = 1
// const Author = 2

enum Role { Admin, Read_only, Author }

const person = {
  name: 'Manish',
  age: 35,
  hobbies: ['sports', 'Cooking'],
  role: Role.Admin
}

// person.role.push('admin')
// person.role[1] = 10

let favoriteActivities: string[]
favoriteActivities = ['sports']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

if (person.role === Role.Admin) {
  console.log('is admin')
}
