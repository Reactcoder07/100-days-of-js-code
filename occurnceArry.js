const array = [1, 2, 4, 7, 3, 1, 6];

const count = {};

for (const element of array) {
  if (count[element]) {
    count[element] = count[element] + 1;
  } else {
    count[element] = 1;
  }
}

console.log(count);