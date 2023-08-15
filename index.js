/**
 * Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */

function convertHTML(str) {
  function characterChanger(character) {
    switch (character) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&apos;';
      default:
        return character;
    }
  }

  return str
    .split('')
    .map((char) => characterChanger(char))
    .join('');
}

const result = convertHTML('Dolce & Gabbana');

console.log(result);
