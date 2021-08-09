// intersection type
type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}
// we r combining both type
type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
  name: 'mani',
  privileges: ['create-server'],
  startDate: new Date(),
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

// type Guard
// function overload
function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: string, b: number): string
function add(a: number, b: string): string
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    // it is called type guard
    return a.toString() + b.toString()
  }
  return a + b
}

const result = add('Mani',' Shahi')
result.split(' ')


const fetchedUserData = {
  id: 'u1',
  name: 'Man',
  job: {title: 'CEO', description: 'My own company'}
}
// console.log(fetchedUserData.job && fetchedUserData.job.title)
// optional chaining
console.log(fetchedUserData?.job?.title)

// ?? nullish coalescing
const userInput = ''

const storedData = userInput ?? 'DEFAULT'
console.log(storedData)

// type UnknowEmployee = Employee | Admin

// function printEmployeeInformation(emp: UnknowEmployee) {
//   console.log('Name: ' + emp.name)
//   if ('privileges' in emp) {
//     console.log('Privelage: ' + emp.privileges)
//   }
//   if ('startDate' in emp) {
//     console.log('Start Date: ' + emp.startDate)
//   }
// }
// // printEmployeeInformation(e1)

// printEmployeeInformation({ name: 'Ma', startDate: new Date() })

// class Car {
//   drive() {
//     console.log('Driving....')
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving a truck.....')
//   }
//   loadCargo(amount: number) {
//     console.log('Loading cargo....' + amount)
//   }
// }

// type Vehicle = Car | Truck

// const v1 = new Car()
// const v2 = new Truck()

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive()
//   // if ('loadCargo' in vehicle) {
//   //   vehicle.loadCargo(1000)
//   // }
//   // better way using instanceof
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000)
//   }
// }

// useVehicle(v1)
// useVehicle(v2)

// // Discrimated Unions one common property in every object

// interface Bird {
//   type: 'bird'
//   flyingSpeed: number
// }
// interface Horse {
//   type: 'horse'
//   runningSpeed: number
// }

// type Animal = Bird | Horse

// function moveAnimal(animal: Animal) {
//   // if ('flyingSpeed'in animal) {
//   //   console.log('Moving with speed: ' + animal.flyingSpeed)
//   // }
//   let speed
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed
//       break
//     case 'horse':
//       speed = animal.runningSpeed
//   }
//   console.log('Moving with speed: ' + speed)
// }

// moveAnimal({type:'bird', flyingSpeed:10})

// //type casting. ! infront of need never is null
// // const userInput = <HTMLInputElement>document.getElementById('userInput')

// const userInput = document.getElementById('userInput')! as HTMLInputElement
// userInput.value = 'Hi there!'

// // index properties
// interface Errorcontainer { // {mail:'Nat a valid email', username: 'Must start with a charcter!'}
//   [prop: string]: string
// }
// const errorBag: Errorcontainer = {
//   email: 'Not a valid Email!',
//   usename: 'Must start with a cpital character'
// }

