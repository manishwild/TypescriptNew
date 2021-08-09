// interface all us to desture the object
// interface Person {
//   name: string
//   age: number
//   greet(phrase: string): void
// }
// let user1: Person

// Interface as function
// type AddFn = (a: number, b: number) => number
interface AddFn {
  (a: number, b: number): number
}

let add: AddFn

add = (n1: number, n2: number) => {
  return n1 + n2
}

// extending interface
// optional parameters ? n property
interface Named {
  readonly name?: string
  // ? it tell it might exit or might not 
  outPutName?: string
}

// we can only add readonly in interface
interface Greetable extends Named {
  // readonly name: string

  greet(phrase: string): void
}
// let user1: Greetable
// we can implement multiple only with ,
class Person implements Greetable {
  name?: string
  age = 30
  // also instead of ? we can give n:string=''
  constructor(n?: string) {
    if (n) {
      this.name = n
    }
    
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name)
    } else {
      console.log('Hi')
    }
    
  }
}

// user1 = {
//   name: 'manis',
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name)
//   },
// }
let user1: Greetable
user1 = new Person()

user1.greet('Hi there - I am')
console.log(user1)
