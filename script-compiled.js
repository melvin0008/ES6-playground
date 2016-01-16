"use strict";

//let and const in action
var maxItems = 30;
if (true) {
    var value = "blue";
} else {
    console.log("No value Here");
}

//Coversion to IIFE
var funcs = [];

var _loop = function _loop(i) {
    funcs.push(function () {
        console.log(i);
    });
};

for (var i = 0; i < 10; i++) {
    _loop(i);
}

funcs.forEach(function (func) {
    func(); // outputs 0, then 1, then 2, up to 9
});
