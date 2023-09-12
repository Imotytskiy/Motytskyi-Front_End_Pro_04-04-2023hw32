const result = 17;
const numbers = [10, 15, 3, 7, 2, 14];

// function combiNumbers(numbers) {
//   const arrRes = [];
//   for (i = 0; i < numbers.length / 2; i++) {
//     arrRes.push([numbers[i], numbers[i + 3]]);
//   }
//   return arrRes;
// }
// console.log(combiNumbers(numbers));

const arrRes = [];
function combiNumbers(numbers) {
  const newArr = [...numbers];
  while (newArr.length) {
    arrRes.push([newArr[0], newArr[newArr.indexOf(result - newArr[0])]]);
    newArr.splice(newArr.indexOf(result - newArr[0]), 1);
    newArr.shift();
  }
  return arrRes;
}

console.log(combiNumbers(numbers));

//expected result of function
// [
//    [10, 7],
//    [15, 2],
//    [3, 14]
// ]"

// exercise 1;
// write a JS programmm to check to numbers if one
// of the number is 100 the sum of the two numbers iss
// 100

// function hundred(firstNum, secondNum) {
//   if (firstNum === 100 || secondNum === 100 || firstNum + secondNum === 100) {
//     return true;
//   }
//   return false;
// }

// console.log(hundred(100, 50));
// console.log(hundred(30, 100));
// console.log(hundred(50, 50));
// console.log(hundred(60, 50));

// const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a+b) === 100

// const extension = (fileName) => {
//   const length = fileName.length;
// };
