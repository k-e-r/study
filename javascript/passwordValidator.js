function isValidPassword(password, username) {
  if (
    password.length < 8 ||
    password.includes(" ") ||
    password.includes(username)
  )
    return false;
  return true;
}

console.log(isValidPassword("test test", "last"));

// sample answer1
// function isValidPassword(password, username) {
//   if (
//     password.length < 8 ||
//     password.indexOf(" ") !== -1 ||
//     password.indexOf(username) !== -1
//   ) {
//     return false;
//   }
//   return true;
// }

// sample answer2
// function isValidPassword(password, username) {
//   const tooShort = password.length < 8;
//   const hasSpace = password.indexOf(" ") !== -1;
//   const tooSimilar = password.indexOf(username) !== -1;
//   if (tooShort || hasSpace || tooSimilar) return false;
//   return true;
// }

// sample answer3
// function isValidPassword(password, username) {
//   const tooShort = password.length < 8;
//   const hasSpace = password.indexOf(" ") !== -1;
//   const tooSimilar = password.indexOf(username) !== -1;
//   if (!tooShort && !hasSpace && !tooSimilar) return true;
//   return false;
// }
