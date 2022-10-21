const sayHello = () => {
  console.log("I've been called");
  return "hello";
};

const sayHelloCallback = (callback) => {
  console.log("In the higher order function");
  console.log(callback());
};

sayHelloCallback(sayHello);
