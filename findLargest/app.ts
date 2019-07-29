function findLargest(numbers: number[]) {
  let max = numbers[0];
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(findLargest([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]));
