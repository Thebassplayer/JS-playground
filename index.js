console.log('conected!');

function charsToMap(str) {
  const charsMap = new Map();

  for (const char of str) {
    const lowerChar = char.toLowerCase();
    charsMap.set(lowerChar, (charsMap.get(lowerChar) || 0) + 1);
  }
  return charsMap;
}

function findFirstUniqueChar(str, charMap) {
  for (let char of str) {
    if (charMap.get(char.toLowerCase()) === 1) {
      return char;
    }
  }

  return '';
}

function firstNonRepeatingLetter(s) {
  const charsMap = charsToMap(s);
  return findFirstUniqueChar(s, charsMap);
}

const str = 'sTress';

const result = firstNonRepeatingLetter(str);

console.log(result);
