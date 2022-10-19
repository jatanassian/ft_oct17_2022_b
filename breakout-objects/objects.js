// Objects are a data structure
// Primitives in JS (data types): String, Boolean, Number, null, undefined, Symbol, BigInt
const emptyObject = {};
if (emptyObject) {
  console.log("This is NOT empty");
} else {
  console.log("This IS empty");
}

if (Object.keys(emptyObject).length) {
  console.log("This is NOT empty");
} else {
  console.log("This IS empty");
}

const dogName = "Kimi";
const dogAge = 2;
const dogColor = "black and white";

const arrayDog = ["Kimi", 2, "black and white"];

const dog = {
  name: "Kimi",
  age: 2,
  color: "black and white",
  50: "Number 50",
  "a long string": "this is a long string",
};

const listOfDogs = [dog];

// How to access objects' values
console.log(dog.name);
console.log(dog["name"]);
// Dot syntax won't work for: numbers, strings containing spaces, special characters

// Objects = references
const object1 = { a: 1, b: 2 };
const object2 = object1;

object1.a = 999;
console.log(object2); // a: 999

let a = 100;
let b = a;
a = 0.5;
console.log(b); // 100

// How to navigate complicated objects
const complicatedObject = {
  levelOne: {
    levelTwo: {
      levelThree: {
        levelFour: {
          levelFive: {
            result: "hello",
          },
        },
      },
    },
  },
};

const levelFourOfObject =
  complicatedObject.levelOne.levelTwo.levelThree.levelFour;
console.log(levelFourOfObject);
const levelFiveObject = levelFourOfObject.levelFive;

// Loop through objects
const anotherObject = { a: 1, b: 2, c: 3 };
for (const key in anotherObject) {
  console.log(anotherObject[key]);
}

for (const key of Object.keys(anotherObject)) {
  console.log(anotherObject[key]);
}

const firstObject = { a: 1, b: 2 };
const secondObject = { a: 1, b: 2 };
console.log(firstObject === secondObject);

// Functions in objects
const me = {
  firstName: "Julien",
  lastName: "Atanassian",
  fullName: function () {
    console.log("Hi my name is", this.firstName, this.lastName);
  },
};

me.fullName();
