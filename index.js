function zero(fn) {
  const num = 0;
  return fn ? fn(num) : num;
}
function one(fn) {
  num = 1;
  return fn ? fn(num) : num;
}
function two(fn) {
  num = 2;
  return fn ? fn(num) : num;
}
function three(fn) {
  num = 3;
  return fn ? fn(num) : num;
}
function four(fn) {
  num = 4;
  return fn ? fn(num) : num;
}
function five(fn) {
  num = 5;
  return fn ? fn(num) : num;
}
function six(fn) {
  num = 6;
  return fn ? fn(num) : num;
}
function seven(fn) {
  num = 7;
  return fn ? fn(num) : num;
}
function eight(fn) {
  num = 8;
  return fn ? fn(num) : num;
}
function nine(fn) {
  num = 9;
  return fn ? fn(num) : num;
}

function plus(x) {
  return function (y) {
    return x + y;
  };
}
function minus(x) {
  return function (y) {
    return x - y;
  };
}
function times(x) {
  return function (y) {
    return x * y;
  };
}
function dividedBy(x) {
  return function (y) {
    return x / y;
  };
}

const result = seven(times(five()));

console.log(result);
