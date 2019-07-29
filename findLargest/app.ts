

function findLargest(numbers: number[]) {
  let max = numbers[0];
  for (let num of numbers) {
    let tagIt = `<p>${num}</p>`;
    let tagItH1 = `<h1>${num}</h1>`;
    $(".current_target").html(num.toString());
    $(".inside_array").append(tagIt);
    $(".inside_array").append("<p>,</p>");
    if (num > max) {
      max = num;
    }
  }
  return max;
}

let tryit = findLargest([5, 3, 3, 6, 5, 9, 15]);
