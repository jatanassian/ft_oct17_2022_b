const randomArray = [1, "dog", "cat", 2, 3, "duiqwdhwqhi", 4, 5];

const myOwnFilter = (array) => {
  for (const element of randomArray) {
    if (typeof element === "number") {
      console.log(element);
    }
  }
};

// myOwnFilter(randomArray);

const myOwnFilterCallback = (array, callback) => {
  for (const element of randomArray) {
    if (callback(element)) {
      console.log(element);
    }
  }
};

const isNumber = (element) => {
  return typeof element === "number";
};

// myOwnFilterCallback(randomArray, isNumber);

const isString = (array) => {
  return array.filter((element) => typeof element === "string");
};

console.log(isString(randomArray));
