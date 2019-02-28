let readlineSync = require('readline-sync');
let userName = readlineSync.question('May I have your name, please? ');
console.log('Hello ' + userName + '!');

let readlineSync3 = require('readline-sync');
let menu = ['Start game', 'Highscore', 'Exit'];
let index = readlineSync3.keyInSelect(menu);
let m = require('./arrays');
if (menu[index] === 'Start game') {
  m.App();
}
