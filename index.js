// function
function sayHello() {
  return "Hello World!";
}

// function as a variable
const fn = sayHello;
console.log(fn());

// function as an argument
function greet(sayHello) {
  console.log(sayHello());
}

// Returning a function
function sayHi() {
  return function () {
    return "Hi there!";
  };
}

const fn = sayHi();
const message = fn();

console.log(message);
