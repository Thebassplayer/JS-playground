console.log('test');

function findMissingNumber(arr) {
  const sortedArray = [...arr].sort((a, b) => a - b);
  return sortedArray;
}

const result = findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);

console.log(result);
