const nehezseg = 10; /* szabalyozza, hogy egy a mennyihez esely van frisitesenkent
                        az akadaly letrehozasahoz. */
let BlockGenerated = 10; /* Ez az ertek szamolja az eddig legeneralt akadalyok szamat. */
const generate2D = (size, size2) => {
  let arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = new Array(size2);
  }
  return arr;
};

const fill2D = (arr) => {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      arr[x][y] = 0;
    }
  }
  return arr;
};

let arr = fill2D(generate2D(24, 80));

let addRandomBlock = () => {
  let random = Math.floor(Math.random() * 3);
  let ertek;
  switch (random) {
    case 0: ertek = [[0, 2, 0], [2, 2, 2], [2, 2, 2]]; break;
    case 1: ertek = [[0, 2, 0], [2, 2, 2], [0, 2, 2]]; break;
    case 2: ertek = [[0, 2, 0], [2, 2, 2], [2, 2, 0]]; break;
  }
  return ertek;
};
let blockToltes = (randomBlock) => {
  let x = 78;
  let y = 23;
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      arr[y - i][x - j] = randomBlock[i][j];
    }
  }
};
let firstBlokk = 1;
let tavolsag = 13;
let blockGeneratedID = 0;
let randomBlockGenerator = () => {
  if (firstBlokk === 1) {
    blockToltes(addRandomBlock());
    firstBlokk--;
    blockGeneratedID++;
  }
  BlockGenerated--;
  if (BlockGenerated <= 0) {
    let ranValue = Math.floor(Math.random() * nehezseg);
    if (ranValue === 5 || BlockGenerated < -20) {
      blockToltes(addRandomBlock());
      BlockGenerated = tavolsag;
      blockGeneratedID++;
      return blockGeneratedID;
    }
  }
};
let dino = [[0, 0, 0, 0, 1, 1, 1, 1, 0],

  [0, 1, 0, 0, 1, 0, 1, 1, 1],

  [0, 1, 0, 0, 1, 1, 1, 1, 1],

  [0, 1, 1, 0, 1, 1, 0, 0, 0],

  [0, 0, 1, 1, 1, 1, 1, 0, 0],

  [0, 0, 1, 1, 1, 0, 0, 0, 0],

  [0, 0, 0, 1, 0, 0, 0, 0, 0]];

let dinoMove = (dino) => {
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 9; j++) {
      arr[17 + i][j + 2] = dino[i][j];
    }
  }
};
dinoMove(dino);
const print2D = () => {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      let kaposzta = '\u2588';
      if (arr[x][y] === 2) {
        process.stdout.write('\u28FF');}
      else if (arr[x][y] === 1) {
        process.stdout.write(kaposzta);
      } else if (arr[x][y] === 0) {
        process.stdout.write(' ');
      } else {
        process.stdout.write(arr[x][y] + '');
      }
    }
    console.log();
  }
};
let status = 0;

let dinoUpDown = () => {
  if (status < 9) {
    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if ((arr[i][j] === 0 && arr[i - 1][j] === 1) || (arr[i][j] === 1 && arr[i - 1][j] === 0)) {
          arr[i - 1][j] = arr[i][j];
          arr[i][j] = 0;
        }
      }
    }
  } else if (status < 14) {

  } else if (status < 23) {
    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = arr.length - 1; j >= 0; j--) {
        if ((arr[i][j] === 0 && arr[i - 1][j] === 1) || (arr[i][j] === 1 && arr[i - 1][j] === 0)) {
          arr[i][j] = arr[i - 1][j];
        }
      }
    }
  } else {
    status = -1;
  } status += 1;
};
let move = () => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length - 1; j++) {
      if ((arr[i][j] === 0 && arr[i][j + 1] === 2) || (arr[i][j] === 2 && arr[i][j + 1] === 0)) {
        arr[i][j] = arr[i][j + 1];
      } else if ((arr[i][j] + arr[i][j + 1]) === 3) {
        cancelled = false;
        print2D(gameOver(gameOverArray));
        process.exit();
      }
    }
  }
};

let gameOverArray = [[0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
  [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1]];

const gameOver = (gameOverArray) => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 44; j++) {
      arr[10 + i][j + 15] = gameOverArray[i][j];
    }
  }
};

// gameOver(gameOverArray);

function KeyAction () {
  let stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');
  stdin.on('data', function (key) {
    if (key === '\u001b[B') {
      process.exit();
    } else if (key === '\u0020') {
      for (let x = 0; x < 24; x++) {
        setTimeout(dinoUpDown, 100 * x);
      }
    }
    process.stdout.write(key);
  });
}
function ScoreAndSpeed () {
  if (blockGeneratedID > score && speed >= 150) {
    speed -= 15; /* Itt lehet allitani a jatek gyorsulasat */
    score++;
    difficulty = 'Easy';
  } else if (blockGeneratedID > score && speed >= 100) {
    speed -= 10;
    score++;
    difficulty = 'Medium';
    tavolsag = 20;
  } else if (blockGeneratedID > score && speed >= 30) {
    speed -= 3;
    score++;
    difficulty = 'Hard';
    tavolsag = 30;
  } else if (blockGeneratedID > score && speed >= 10) {
    speed -= 1;
    score++;
    difficulty = 'Nightmare';
    tavolsag = 50;
  } else if (blockGeneratedID > score && speed > 4) {
    speed -= 1;
    score++;
    difficulty = 'IMPOSSIBLE';
    tavolsag = 70;
  } else if (speed === 4) {
    score++;
    difficulty = 'JESUS!';
  }
}
/* function highscoreIratas (score) {
  myObj = {name: userName, scores: score};
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("gameStorage", myJSON);
} */
let speed = 300;
let score = 0;
let difficulty = '- (Varakozas az elso akadalyra)';
let cancelled = true;
KeyAction();
let App = () => {
  setTimeout(function run () {
    if (cancelled) {
      console.clear();
      randomBlockGenerator();
      move();
      print2D(move());
      setTimeout(run, speed);
      ScoreAndSpeed();
      console.log('Kaktusszamlalo: ' + score + ' | Nehezseg: ' + difficulty + '\b:' + BlockGenerated);
    }
  });
};

App();
