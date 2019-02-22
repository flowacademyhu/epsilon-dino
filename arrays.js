
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

let arr = fill2D(generate2D(10, 120));

let block1 = [[0, 2, 0], [2, 2, 2], [2, 2, 2]];
let block2 = [[0, 2, 0], [0, 2, 0], [0, 0, 0]];
let block3 = [[0, 2, 0], [2, 2, 2], [2, 2, 0]];

let randomBlock = (block) => {
  let x = 118;
  let y = 8;
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      arr[y - i][x - j] = block[i][j];
    }
  }
};

randomBlock(block3);

let dino = [[0, 1, 0], [0, 1, 1], [0, 1, 0]];

let dinoMove = (dino) => {
  let x = 119;
  let y = 8;
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      arr[y - i][j] = dino[i][j];
    }
  }
};
dinoMove(dino);

const print2D = () => {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      process.stdout.write(arr[x][y] + '');
    }
    console.log();
  }
};

let dinoUp = () => {
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 0; j < 3; j++) {
      if(arr[i][j] === 1){
      arr[i-1][j]=arr[i][j]
      arr[i][j] = 0
      }
    }
  }
};


let move = () => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length - 1; j++) {
      if (arr[i][j] === 2 || arr[i][j] === 0) {
        arr[i][j] = arr[i][j + 1];
      } else if ((arr[i][j] + arr[i][j + 1]) === 3) {
        STOP();
      }
    }
  }
};

function STOP () {
  console.log('Vesztettel, vege!');
  process.exit();
}
function KeyAction () {
  let stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');
  stdin.on('data', function (key) {
    if (key === '\u001b[A') {
      process.exit();
    }
    process.stdout.write(key);
  });
}
KeyAction();
function intervalFunc () {
  console.clear();
  // minden
  dinoUp();
  print2D(move());
}
setInterval(intervalFunc, 100);
