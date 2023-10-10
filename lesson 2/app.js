const os = require('os');
const greeting = require('./greeting');
const User = require('./user.js');

// получим имя текущего пользователя
let userName = os.userInfo().username;
let eugene = new User('Eugene', 32);
eugene.sayHi();

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));