console.log("This is a string tutorial in JavaScript");

let a = "Hennry";

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]); // undefined, as there is no 7th character in the string

console.log(a.length);

// backtick(`) is a Template literal

let real_name = "Hennry";
let friend_name = "Benny";
// console.log("My name is " + real_name + " and my friend's name is " + friend_name);
console.log(`My name is ${real_name} and my friend's name is ${friend_name}`);

let b = "Kenny";
console.log(b.toUpperCase()); // Converts the string to uppercase
console.log(b.toLowerCase()); // Converts the string to lowercase
console.log(a.slice(1,4))
console.log(a.slice(3))
let c ="Kallu Henrry Henrry";
console.log(c.replace("Henrry", "Kaliya")); // Replaces the first occurrence only
let d = "Horid Benny, Kallu Benny";
console.log(d.replaceAll("Benny", "Henrry")); // Replaces all occurrences
console.log(b.concat(a)) // Concatenates two strings

let e = "  Shiv   ";
console.log(e)
console.log(e.trim()); // Removes whitespace from both ends of the string 


let str = "Please give me 100₹"
let amount = str.match(/\d+/)[0]; // Extracts the first sequence of digits from the string
console.log(amount); // Extracts the first sequence of digits from the string   