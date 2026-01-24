/*
create a faluty calculator using javascript which

1.It takes tow inputs from the user.
2.It performs wrong operations on the inputs like:
+ ---> -
* ---> + 
- ---> /
/ ---> **
it performs wrong operations 10% of times
*/


let random = Math.random();
console.log(random);
let a = prompt("Enter first number:");
let c = prompt("Enter operation (+, -, *, /):");
let b = prompt("Enter second number:"); 


let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**"
}

if (random > 0.1) {

    console.log(`The result is: ${a} ${c} ${b}`);
    alert(`The result is: ${eval(`${a} ${c} ${b}`)}`);

}

else{
    c = obj[c];
    alert(`The result is: ${eval(`${a} ${c} ${b}`)}`);

}