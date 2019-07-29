"use strict";
function findLargest(numbers) {
    var max = numbers[0];
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        var tagIt = "<p>" + num + "</p>";
        var tagItH1 = "<h1>" + num + "</h1>";
        $(".current_target").html(num.toString());
        $(".inside_array").append(tagIt);
        $(".inside_array").append("<p>,</p>");
        if (num > max) {
            max = num;
        }
    }
    return max;
}
var tryit = findLargest([5, 3, 3, 6, 5, 9, 15]);
