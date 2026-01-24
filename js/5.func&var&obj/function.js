// These are the functions in JavaScript
function nice(name ) {
    console.log("Hey " + name + "you are nice!")
    console.log("Hey " + name + "you are good man")
    console.log("Hey " + name + "your bike is good man")
    console.log("Hey " + name + "your car is amazing")
}
nice("Henrry ")

function sum(a,b, c=2){
        //  console.log(a+b)
        return a + b + c
}
result1 = sum(3,5)
result2 = sum(23,5)
result3 = sum(3,15)
console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

const func1 = (x) => {
    console.log("This is an arrow function",x)
}

func1(34);
func1(66);
func1(82);

// These are the variables in JavaScript

let x ="Hennry bhai"
let y = 55;
let z = 9.1423;
let p = true;
let q = null;
let r = undefined;

// These below are the primitive datatypes in JavaScript

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// These are the objects in JavaScript

let myObj = {
    name: "Hennry",
    job: "Software Engineer",
    age: 30,
}
console.log(myObj);