const speed = 1000;
const nehezseg = 40;
let BlockGenerated = 0;
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

let addRandomBlock = () => {
  let random = Math.floor(Math.random() * 3);
  let ertek;
  switch (random) {
    case 0: ertek = [[0, 2, 0], [2, 2, 2], [2, 2, 2]]; break;
    case 1: ertek = [[0, 2, 0], [0, 2, 0], [0, 0, 0]]; break;
    case 2: ertek = [[0, 2, 0], [2, 2, 2], [2, 2, 0]]; break;
  }
  return ertek;
};
let blockToltes = (randomBlock) => {
  let x = 118;
  let y = 8;
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      arr[y - i][x - j] = randomBlock[i][j];
    }
  }
};
let randomBlockGenerator = () => {
  BlockGenerated--;
  if (BlockGenerated < 0) {
    let ranValue = Math.floor(Math.random() * nehezseg);
    if (ranValue === 5) {
      blockToltes(addRandomBlock());
      BlockGenerated = 10;
    }
  }
};
let dino = [[0, 1, 0], [0, 1, 1], [0, 1, 0]];

let dinoMove = (dino) => {
  // let x = 119;
  let y = 8; // 3
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
      let kaposzta = '\u220E';
      if (arr[x][y] === 1 || arr[x][y] === 2) {
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
  if (status < 5) {
    for (let i = 1; i < arr.length - 1; i++) {
      for (let j = 0; j < 3; j++) {
        if (arr[i][j] === 1) {
          arr[i - 1][j] = arr[i][j];
          arr[i][j] = 0;
        }
      }
    }
  } else if (status < 7) {

  } else if (status < 12) {
    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 2; j >= 0; j--) {
        arr[i][j] = arr[i - 1][j];
      }
    }
  } else {
    status = -1;
  } status += 1;
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
    if (key === '\u001b[B') {
      process.exit();
    } else if (key === '\u0020') {
      // setInterval(dinoUp, 100);
      for (let x = 0; x < 13; x++) {
        setTimeout(dinoUpDown, 200 * x);
      }
    }
    process.stdout.write(key);
  });
}

KeyAction();

function intervalFunc () {
  console.clear();
  // minden
  // dinoUp();
  randomBlockGenerator();
  print2D(move());
  // dinoDown()
}
setInterval(intervalFunc, 200);
