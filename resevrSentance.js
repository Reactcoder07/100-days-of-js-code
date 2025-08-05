const str1 = 'Pradip Kolage';

function reverseWords(str) {
  let reverseWordArr = str
    .split(' ')
    .map((word) => word.split('').reverse().join(''));
  return reverseWordArr.join(' ');
}

const result = reverseWords(str1);
console.log(result);