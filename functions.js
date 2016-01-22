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

//Function name property

var doSomething = function doSomethingElse() {
    // ...
};

var person = {
    get firstName() {
        return "Nicholas"
    },
    sayName: function() {
        console.log(this.name);
    }
}

console.log(doSomething.name);      // "doSomethingElse"
console.log(person.sayName.name);   // "sayName"
console.log(person.firstName.name); // "get firstName"


//Special Cases of name property
var doSomething = function() {
    // ...
};

console.log(doSomething.bind().name);   // "bound doSomething"

console.log((new Function()).name);     // "anonymous"


//new.target function to check whether a function was called with the keywor new or not. Can also be used to check the construtor