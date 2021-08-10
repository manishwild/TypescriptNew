//decorator
// function Logger(constructor: Function) {
//   console.log('Logging ....')
//   console.log(constructor)
// }
//decorator Factories
function Logger(logString: string) {
  console.log('LOGGER FACTORY')
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}
// it works as buttom up. it will called second decrotor first than first decorator
function WithTemplate(template: string, hookId: string) {
  // _ to tell typescript i know it there but i wont use it
  console.log('TEMPLATE FACTORY')
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super()
        console.log('Rendering Template')
        const hookEl = document.getElementById(hookId)
        if (hookEl) {
          hookEl.innerHTML = template
          hookEl.querySelector('h1')!.textContent = this.name
        }
      }
    }
  }
}

// @Logger('LOGGING - PERSON')
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Manis'
  constructor() {
    console.log('Creating Person Object')
  }
}
const per = new Person()
console.log(per)

// property Decorator
function Log(target: any, propertyName: string | symbol) {
  console.log('Property decrorator!')
  console.log(target, propertyName)
}
// Accessor & Parameter Decorators
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log3(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log4(target: any, name: string | symbol, position: number) {
  console.log('Parameter decorator')
  console.log(target)
  console.log(name)
  console.log(position)
}
class Product {
  @Log
  title: string
  private _price: number

  @Log2
  set Price(val: number) {
    if (val > 0) {
      this._price = val
    } else {
      throw new Error('Invalid Price - should be positive')
    }
  }

  constructor(t: string, p: number) {
    this.title = t
    this._price = p
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax)
  }
}

const p1 = new Product('Book', 19)
const p2 = new Product('Book 2', 29)
// autobind Decorator
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const orginalMethod = descriptor.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = orginalMethod.bind(this)
      return boundFn
    },
  }
  return adjDescriptor
}

class Printer {
  message = 'This Works!'
  @Autobind
  showMessage() {
    console.log(this.message)
  }
}
const p = new Printer()

const button = document.querySelector('button')!
button.addEventListener('click', p.showMessage)

// validation with decorators
interface Validatorconfig {
  [property: string]: {
    [validatableProp: string]: string[] //['required','positive']
  }
}
const registerValidator: Validatorconfig = {}

function Require(target: any, propName: string) {
  registerValidator[target.constructor.name] = {
    ...registerValidator[target.constructor.name],
    [propName]: ['required'],
  }
}
function PositiveNumber(target: any, propName: string) {
  registerValidator[target.constructor.name] = {
    ...registerValidator[target.constructor.name],
    [propName]: ['positive'],
  }
}
// !! double Bang
function Validate(obj: any) {
  const objValidatorConfig = registerValidator[obj.constructor.name]
  if (!objValidatorConfig) {
    return true
  }
  let isValid = true
  for (const prop in objValidatorConfig) {
    console.log(prop)
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop]
          break
        case 'positive':
          isValid = isValid && obj[prop] > 0
          break
      }
    }
  }
  return isValid
}

class Course {
  @Require
  title: string
  @PositiveNumber
  price: number
  constructor(t: string, p: number) {
    this.title = t
    this.price = p
  }
}
const courseForm = document.querySelector('form')!
courseForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const titleEl = document.getElementById('title') as HTMLInputElement
  const priceEl = document.getElementById('price') as HTMLInputElement
  // note + will convert to number.it will tell it is number
  const title = titleEl.value
  const price = +priceEl.value
  // if (title.trim().length > 0) {}
  const createdCourse = new Course(title, price)
  if (!Validate(createdCourse)) {
    alert('Invalid input, Please try again!')
    return
  }
  console.log(createdCourse)
})
