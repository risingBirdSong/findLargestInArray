"use strict";
function findLargest(numbers) {
    var max = numbers[0];
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        if (num > max) {
            max = num;
        }
    }
    return max;
}
console.log(findLargest([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]));
