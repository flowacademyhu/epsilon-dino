let scoreRead = require('./arrays');
let score = scoreRead.score;
var fs = require('fs');
let m = require('./arrays');
let rawdata = fs.readFileSync('score.json');
let data = JSON.parse(rawdata);
let kiir = () => {
  console.log('kapi');
};
function sort (data) {
  console.log('wqeqw::: ' + data);
  for (let i = 1; i < 5; i++) {
    let temp = data.score[i];
    let temp2 = data.title[i];
    let j = i - 1;
    for (j; j >= 0 && temp > data.score[j]; j--) {
      data.score[j + 1] = data.score[j];
      data.title[j + 1] = data.title[j];
    }
    data.score[j + 1] = temp;
    data.title[j + 1] = temp2;
  } return data;
}

sort(m.salata);

let name = 'Moxi';

let insert = (data, score, name) => {
  if (score > data.score[4]) {
    data.score.pop();
    data.title.pop();
    data.score.push(score);
    data.title.push(name);
  }
  return data;
};
let data2 = sort(m.salata);

let dataWrite = JSON.stringify(data2);
fs.writeFileSync('score.json', dataWrite);

module.exports = { insert, kiir, data, score, name };
