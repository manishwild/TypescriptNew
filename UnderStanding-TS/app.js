// the Unknown type. and also it is better than any.we should not use all the time.
let userInput
let userName
userInput = 5
userInput = 'Preetish'
if (typeof userInput === 'string') {
  userName = userInput
}
// never type. it will never return anything
function generateError (message, code) {
  throw { message: message, errorCode: code }
  // while (true) {} //infinity loop
}
generateError('An Error Occured!', 500)
