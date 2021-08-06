abstract class Department {
  // static property , it cannot be access witout static
  static fiscalYear = 2020
  //  private readonly id: string
  //  private name: string
  // protected is access by all extend class
  protected employee: string[] = []
  // private is now access inside the class

  // readonly
  constructor (protected readonly id: string, public name: string) {
    // shorthand instead of writing up we can declare id n name in constructur
    //  this.id = id
    //  this.name = n
    // console.log(this.fiscalYear)
    console.log(Department.fiscalYear)
  }

  // static method n property
  static crateEmployee (name: string) {
    return { name: name }
  }

  // abstract
  abstract describe(this: Department): void // {
  //  console.log('Department: ' + this.name)
  // console.log(`Department (${this.id}): ${this.name}`)
  // }

  addEmployee (employee: string) {
    this.employee.push(employee)
  }

  printEmployeeInformation () {
    console.log(this.employee.length)
    console.log(this.employee)
  }
}
// inheritance
class ItDepartment extends Department {
  // admins: string[]
  constructor (id: string, public admins: string[]) {
    super(id, 'IT')
    this.admins = admins
  }

  describe () {
    console.log('Acconting Departmant - ID: ' + this.id)
  }
}

class AccountingDepartment extends Department {
  private lastreport: string
  private static instance: AccountingDepartment
  // getters
  get mostRecentreport () {
    if (this.lastreport) {
      return this.lastreport
    }
    throw new Error('No report found')
  }

  // setters
  set mostRecentreport (value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!')
    }
    this.addReport(value)
  }
  // singletons & private constructor

  private constructor (id: string, private reports: string[]) {
    super(id, 'Accounting')
    this.lastreport = reports[0]
  }

  static getInstance () {
    if (AccountingDepartment.instance) {
      return this.instance
    }
    this.instance = new AccountingDepartment('d2', [])
    return this.instance
  }

  // abstract classes
  describe () {
    console.log('Acconting Departmant - ID: ' + this.id)
  }

  // overriding properties
  addEmployee (name: string) {
    if (name === 'Ma') {
      return
    }
    this.employee.push(name)
  }

  addReport (text: string) {
    this.reports.push(text)
    this.lastreport = text
  }

  printReports () {
    console.log(this.reports)
  }
}

const employee1 = Department.crateEmployee('Pre')
console.log(employee1, Department.fiscalYear)

const it = new ItDepartment('d1', ['mani'])
// console.log(accounting)
it.addEmployee('Mani')
it.addEmployee('Manis')
// accounting.employee[2] = 'preet' // we should avoid alternative way

it.describe()
it.printEmployeeInformation()
console.log(it)
// const accountingCopy = { name:'Dummy', describe: accounting.describe }
// accountingCopy.describe()

// const accounting = new AccountingDepartment('d2', [])
const accounting = AccountingDepartment.getInstance()
const accounting1 = AccountingDepartment.getInstance()
console.log(accounting, accounting1)

accounting.mostRecentreport = 'Year end Report'
accounting.addReport('Something went wrong...')
console.log(accounting.mostRecentreport)

accounting.addEmployee('Ma')
accounting.addEmployee('pa')
// accounting.printEmployeeInformation()
// accounting.printReports()
accounting.describe()
