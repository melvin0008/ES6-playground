//USE OF CODEPOINT

//http://stackoverflow.com/questions/12280801/what-exactly-does-the-string-codepointat-do?lq=1


var text = "𠮷a";

console.log(text.charCodeAt(0));    // 55362
console.log(text.charCodeAt(1));    // 57271
console.log(text.charCodeAt(2));    // 97

console.log(text.codePointAt(0));   // 134071
console.log(text.codePointAt(1));   // 57271
console.log(text.codePointAt(2));   // 97



//Reverse

console.log(String.fromCodePoint(134071));



///////Normalization

///http://unicode.org/faq/normalization.html

var x="Melvin"
x.normalize()

//Always normalize before comparing strings with unicodes

