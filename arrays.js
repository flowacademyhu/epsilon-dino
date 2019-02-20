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
function intervalFunc () {
  console.clear();
  // minden
  print2D();
}
setInterval(intervalFunc, 1500);
