function zero(fn) {
  fn ? fn(0) : 0;
}
function one(fn) {
  fn ? fn(0) : 0;
}
function two(fn) {
  fn ? fn(0) : 0;
}
function three(fn) {
  fn ? fn(0) : 0;
}
function four(fn) {
  fn ? fn(0) : 0;
}
function five(fn) {
  fn ? fn(0) : 0;
}
function six(fn) {
  fn ? fn(0) : 0;
}
function seven(fn) {
  fn ? fn(0) : 0;
}
function eight(fn) {
  fn ? fn(0) : 0;
}
function nine(fn) {
  fn ? fn(0) : 0;
}

function plus(x) {
  return function (y) {
    y + x;
  };
}
function minus(x) {
  return function (y) {
    y - x;
  };
}
function times(x) {
  return function (y) {
    y * x;
  };
}
function dividedBy(x) {
  return function (y) {
    y / x;
  };
}
