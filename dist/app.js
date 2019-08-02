"use strict";
//todo it doesn't work with double digit numbers!
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let arrayToRunOn = [4, 6, 3, -1, 9, 12, 5, 1, 13, 67, -44, 99];
function delayer(speed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), speed);
    });
}
function findLargest(numbers, howMuchDelay) {
    return __awaiter(this, void 0, void 0, function* () {
        let max = numbers[0];
        for (let i = 0; i < numbers.length; i++) {
            let tagIt = `<p>${numbers[i]}</p>`;
            $(".current_target").html(numbers[i].toString());
            if (numbers[i] > max) {
                max = numbers[i];
                tagIt = `<p class="has_been_max">${numbers[i]}</p>`;
                // $(".popup").css("display", "block");
                // delayer(200);
                // $(".popup").css("display", "none");
            }
            $(".inside_array").append(tagIt);
            if (i < numbers.length - 1) {
                $(".inside_array").append("<p>,</p>");
            }
            $(".max_target").html(max.toString());
            yield delayer(howMuchDelay);
        }
        return max;
    });
}
// TODO come backlater and comment this back in it's too annoying for now.
$('.reveal').click(function () {
    $('.toggling').toggle();
});
//user input
//TODO set up form validation
//hmm why isn't it console logging e, 'hit', or anything, and with the callees commented out, how are they firing?
// omg i didnt have tsc -w on ... omg :( :(
$(".submitme").click(function (e) {
    e.preventDefault();
    let values = $(this)
        .siblings()
        .val();
    let split = values.split(",");
    let convert = split
        .map(val => {
        return parseFloat(val);
    })
        .filter(val => (typeof val === "number" ? val : false));
    arrayToRunOn = convert;
    console.log('arrayToRunOn 59', arrayToRunOn);
    // above and below is duplication, which is preferable
    if (values[0] !== "[") {
        ifUserEntersCommaSeparatedValues.call($(this));
    }
    else if (values[0] === "[") {
        let stringify = "[";
        for (let i = 0; i < arrayToRunOn.length; i++) {
            stringify += arrayToRunOn[i].toString();
            if (i < arrayToRunOn.length - 1) {
                stringify += ",";
            }
        }
        stringify += "]";
        theUserPassedAnArray.call($(this), $(this), stringify);
    }
});
$(".user_to_add_own_numbers").hover(function () {
    $(".cloud_of_text").css("display", "");
}, function () {
    $(".cloud_of_text").css("display", "none");
    console.log("mouse out");
});
//@ts-ignore;
//helper functions helper functions helper functions helper functions
function ifUserEntersCommaSeparatedValues() {
    //@ts-ignore
    let userInput = $(this)
        .siblings("input")
        .val();
    let turnToArray = userInput.split(",");
    if (turnToArray[turnToArray.length - 1] === "") {
        turnToArray.pop();
    }
    console.log('turnToArray', turnToArray);
    //the following will turn the dom to look like an array from user input on form with just comma separated numbers...
    //example : 1,2,3 => [1,2,3];
    turnToArray.unshift("[");
    turnToArray.map((val, index) => {
        if (index === 0) {
            turnToArray[0] = `${val}${turnToArray[1]}`;
        }
        if (index === turnToArray.length - 1) {
            turnToArray[index] = `${turnToArray[index]}]`;
        }
    });
    turnToArray.splice(1, 1);
    // if (turnToArray[turnToArray.length] === ',') {
    //   console.log('it is');
    // }
    $(".default").html(turnToArray.join(","));
    $(".default").addClass("userInputArray");
}
function theUserPassedAnArray(that, vals) {
    $(".default").html(vals);
}
$(".begin").click(function () {
    $(".inside_array p").remove();
    console.log('arrayToRunOn', arrayToRunOn);
    findLargest(arrayToRunOn, 500);
});
$(".reset").click(function () {
    arrayToRunOn = [4, 6, 3, -1, 9, 12, 5, 1, 13, 67, -44, 99];
    $(".inside_array p").remove();
});
// let tryit = findLargest(
//   [5, 6, 3, 6, 5, 9, 15, 17, 34, 1, 64, 1, 64, 14, 65,89,3,7,100,104],
//   2000
// );
