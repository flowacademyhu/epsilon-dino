// lanyok ma jol fogunk haladni!
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
let arr = fill2D(generate2D(10, 60));
const print2D = () => {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      process.stdout.write(arr[x][y] + '');
    }

    console.log();
  }
};
/*
let sor = 1;
let sor2 = 0;
let mozgas = (arr) => {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      arr[x][sor] = 1;
      process.stdout.write(arr[x][y] + '');
      arr[x][sor] = arr[x][sor2];
      process.stdout.write(arr[x][y] + '');
    }
    console.log();
  }
  sor++;
  sor2++;
};
*/
let sor = 1;
let sor2 = 0;
const szalami = (arr) => {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length-1; y++) {
      arr[x][y] = arr[x][y+1];
    }
    sor++;
    sor2++;
  }
};
const szalami2 = (arr) => {
  arr[5][5] = 1;
};
szalami2(arr);
function intervalFunc () {
  console.clear();
  // minden
  // mozgas(arr);
  
  szalami(arr);
  print2D(arr);
}
setInterval(intervalFunc, 1500);
