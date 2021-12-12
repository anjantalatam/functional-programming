function add(a, b) {
  return function (b) {
    return a + b;
  };
}

const add1 = (a) => (b) => a + b; // (a,b) => a + b

// console the below the lines to see the output
add(3)(4); // add(3,4)
add1(3)(4);
