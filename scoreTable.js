let writeAndReadFile = (score) => {
  const userName = require('./modulozos');
  let name = userName.userName;

  //const scoreRead = require('./arrays');

  var fs = require('fs');

  let rawdata = fs.readFileSync('score.json');
  let data = JSON.parse(rawdata);

  let printScoreBoard = (data) => {
    console.log('ScoreBoard:');
    for (let i = 0; i < 5; i++) {
      let j = i + 1;
      console.log(j + '.' + data.title[i] + ':\t' + data.score[i]);
    }
  };
  
  function sort (data) {
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

  sort(data);

  let insert = (data, score, name) => {
    if (score > data.score[4]) {
      data.score.pop();
      data.title.pop();
      data.score.push(score);
      data.title.push(name);
    }
    else { 
      console.log('You did not reach the scoretable');
    } return data;
  };

  insert(data, score, name);

  data = sort(data);
  printScoreBoard(data);

  let dataWrite = JSON.stringify(data);
  fs.writeFileSync('score.json', dataWrite);
};

module.exports = { writeAndReadFile };
