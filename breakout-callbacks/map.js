const numbers = [1, 2, 3, 4, 5];

// array.map()
const myOwnMap = (array) => {
  for (const element of array) {
    console.log(element * 2);
  }
};

// myOwnMap(numbers);

const myOwnMapCallback = (array, callback) => {
  for (const element of array) {
    console.log(callback(element));
  }
};

const multiplyByTwo = (number) => {
  return number / 2;
};

// myOwnMapCallback(numbers, multiplyByTwo);

const numbersByTwo = (array) => {
  return array.map((element) => element * 2);
};

console.log(numbersByTwo(numbers));
