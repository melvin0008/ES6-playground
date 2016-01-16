//Basic Example
function makeRequest(url, timeout = 2000, callback = function() {}) {

    // the rest of the function

}



//Expressions or functions
function getValue() {
    return 5;
}

function add(first, second = getValue()) {
    return first + second;
}

console.log(add(1, 1));     // 2
console.log(add(1));        // 6

//You can have parameters point to the variables on the left
function add(first, second = first) {
    return first + second;
}

console.log(add(1, 1));     // 2
console.log(add(1));        // 2


//Not this
function add(first = second, second) {
    return first + second;
}

console.log(add(1, 1));     // 2
console.log(add(1));        // throws error


//Rest Parameters

function checkArgs(...args) {
    console.log(args.length);
    console.log(arguments.length);
    console.log(args[0], arguments[0]);
    console.log(args[1], arguments[1]);
}

checkArgs("a", "b");


//Function Constructor : includes default and rest parameters

var add = new Function("first", "second", "return first + second");

console.log(add(1, 1));     // 2


