let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(a)
console.log(a.length);
console.log("***")
a[1]=1
console.log(a[0]); // Accessing the first element
console.log(a[1]); // Accessing the second element
console.log(a[2]); // Accessing the third element
console.log(a[5]); // Accessing the sixth element
console.log(a[9]); // Accessing the last element
console.log(typeof a)
console.log(a.toString())
console.log(a.join(" - ")); // Joining elements with a separator
console.log(a.pop()); // Removing the last element
console.log(a.push(100)); // Adding an element to the end
console.log(a.shift()); // Removing the first element   
console.log(a.unshift("Hello")); // Adding an element to the beginning
console.log(a);
a.forEach((value,index)=>{
    console.log(value,index)
})


console.log("This is the forin loop")
let obj = {
    name: "John",
    age: 30,
    city: "New York"
};
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}

for (const iterator of a) {
    console.log(iterator);
}


let x = [11, 20, 13, 17, 25];
let newwx=[]
for (let index = 0; index < x.length; index++) {
    const element = x[index];
    newwx.push(element**2);
}
console.log(newwx);

// or 

let newx = x.map((e) => {
    return e ** 3;
})
console.log(newx);

const greaterThanFifteen = (e)=>{
    if(e > 15){
        return true;
    }
    return false;
}
console.log(x.filter(greaterThanFifteen));

let xx = [1,2,3,4,5,6]
const red  = (a,b)=>{
    return a*b
}
console.log(xx.reduce(red))

let z = "Kenny"
console.log(Array.from(z))
console.log("abc\"".length)