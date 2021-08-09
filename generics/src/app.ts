// generic type
// const names: Array<string> = [] // string[]
// names[0].split(' ')

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10)
//   }, 1000);
// })
// promise.then(dtata => {
//   // data.split(' ')
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}
const mergedObj = merge({ name: 'mani', hobbies: ['sport'] }, { age: 30 })
console.log(mergedObj)
// geniric function
interface Lengthy {
  length: number
}

function CountNdescribe<T extends Lengthy>(element: T): [T, string] {
  let decriptionText = 'Got no value.'
  if (element.length === 1) {
    decriptionText = 'Got 1 elements.'
  } else if (element.length > 1) {
    decriptionText = 'Got ' + element.length + ' elements.'
  }
  return [element, decriptionText]
}

console.log(CountNdescribe(['Sport', 'Driving']))
// key of constrain
function extractNconvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key]
}
extractNconvert({ name: 'MP' }, 'name')

// Generic class
class DataStorage<T extends string | number | boolean> {
  private data: T[] = []
  addItem(item: T) {
    this.data.push(item)
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return
    }
    this.data.splice(this.data.indexOf(item), 1)
  }
  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Manis')
textStorage.addItem('Preety')
textStorage.removeItem('Manis')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()

// const objStorage = new DataStorage<object>()
// const manObj = {name: 'Manis'}
// objStorage.addItem(manObj)
// objStorage.addItem({name: 'preety'})

// objStorage.removeItem(manObj)
// console.log(objStorage.getItems())

// Generic utility types
interface CourseGoal {
  title: string
  description: string
  completeUntil: Date
}
function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.completeUntil = date
  return courseGoal as CourseGoal
}

const names: Readonly<string[]> = ['Mani', 'Pret']
// names.push('Manis')
// names.pop()