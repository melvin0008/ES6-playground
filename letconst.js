//let and const in action
const maxItems = 30;
if (true) {
    let value = "blue";
}else {
	console.log("No value Here");
}

//Coversion to IIFE
var funcs = [];

for (let i=0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}


funcs.forEach(function(func) {
    func();     // outputs 0, then 1, then 2, up to 9
})
