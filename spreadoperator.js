// The normal way to do max
let value1 = 25,
    value2 = 50;

console.log(Math.max(value1, value2));      // 50

//But what if you have a huge list of numbers

let values = [25, 50, 75, 100]

console.log(Math.max.apply(Math, values));  // 100


//Behold the spread operator

let values = [25, 50, 75, 100]

// equivalent to
// console.log(Math.max(25, 50, 75, 100));
console.log(Math.max(...values));           // 100