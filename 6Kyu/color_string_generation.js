const solution = number => {
  let sum = 0;
  for(let i = 1; i < number; i += 1) {
    if(i % 5 == 0 || i % 3 == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(solution(99));

function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;
  for(let i = 0; i <= input.length; i += 1) {
    if(input[i] < 0) {
      sum -= input[i]
    } 
  }
  return [count, sum];
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))