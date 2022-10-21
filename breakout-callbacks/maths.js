const doMaths = (a, b) => {
  console.log(a - b);
};

// doMaths(5, 2);

const addition = (x, y) => {
  return x + y;
};
const substraction = (x, y) => {
  return x - y;
};
const multiplication = (x, y) => {
  return x * y;
};

const doMathsCallback = (a, b, callback) => {
  console.log(callback(a, b));
};

doMathsCallback(5, 2, multiplication);
