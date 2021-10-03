function avg(arr) {
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    avg += arr[i];
  }
  return (avg /= arr.length);
}

console.log(avg([0, 50]));
console.log(avg([75, 76, 80, 95, 100]));

// sample answer
// function avg(arr) {
//   let total = 0;
//   for (let num of arr) {
//     total += num;
//   }
//   return total / arr.length;
// }
