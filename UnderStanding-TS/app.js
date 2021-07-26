// the Unknown type. and also it is better than any.we should not use all the time.
var userInput;
var userName;
userInput = 5;
userInput = 'Preetish';
if (typeof userInput === 'string') {
    userName = userInput;
}
// never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An Error Occured!', 500);
