let readlineSync = require('readline-sync');
let userName = readlineSync.question('May I have your name, please? ');
console.log('Hello ' + userName + '!');
let readlineSync2 = require('readline-sync');
let menu = ['Start game', 'Select a character', 'Highscore', 'Exit'];
let index = readlineSync2.keyInSelect(menu, null, { cancel: false });
let m = require('./arrays');
if (menu[index] === 'Start game') {
  m.App();
} else if (menu[index] === 'Exit') {
  console.log('Key 3 was pressed, application terminated.');
  process.exit();
} else if (menu[index] === 'Select a character') {
  console.clear();
  let menu2 = ['Dino', 'Alpaca'];
  let index3 = readlineSync2.keyInSelect(menu2, null, { cancel: false });
  if (menu2[index3] === 'Dino') {
    m.App(m.characterSelect(1));
  } else {
    m.App(m.characterSelect(2));
  }
}
