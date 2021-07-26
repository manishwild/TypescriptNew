// the Unknown type. and also it is better than any.we should not use all the time.
let userInput: unknown
let userName: string

userInput = 5
userInput = 'Preetish'
if (typeof userInput === 'string') {
  userName = userInput
}

// never type. it will never return anything
function generateError (message: string, code: number): never {
  throw { message: message, errorCode: code }
  // while (true) {}
}
generateError('An Error Occured!', 500)
