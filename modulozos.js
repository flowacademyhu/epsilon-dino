
let readlineSync = require('readline-sync');
let userName = readlineSync.question('May I have your name, please? ');
console.log('Hello ' + userName + '!');
let readlineSync3 = require('readline-sync');
let menu = ['Start game', 'Exit'];
let index = readlineSync3.keyInSelect(menu, null, { cancel: false });
let m = require('./arrays');
if (menu[index] === 'Start game') {
  m.App();
} else if (menu[index] === 'Exit') {
  console.log('Key 3 was pressed, application terminated.');
  process.exit();
}

module.exports = { userName };
