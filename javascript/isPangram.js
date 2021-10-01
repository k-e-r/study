function isPangram(sentence) {
  let lowerCased = sentence.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (lowerCased.indexOf(char) === -1) return false;
  }
  return true;
}

console.log(isPangram("The five boxing wizards jump quickly"));

// sample answer1
// caution! 'includes' is not supported by IE
// function isPangram(sentence) {
//   let lowerCased = sentence.toLowerCase();
//   for (let char of "abcdefghijklmnopqrstuvwxyz") {
//     if (!lowerCased.includes(char)) return false;
//   }
//   return true;
// }
