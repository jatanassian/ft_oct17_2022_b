// What is a promise?

const consoleLogging = (string) => {
  return new Promise((resolve, reject) => {
    if (!string) {
      reject("You forgot a string!");
    } else {
      resolve(`Here is your string: ${string}`);
    }
  });
};

consoleLogging()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => {
    // Do something... (remove loading spinner for example)
  });
