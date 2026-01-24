console.log("Its a tutorial on Loops")

let a=1;
console.log(a)
console.log(a+1)
console.log(a+2)

console.log("Using loop")

for (let i = 0; i < 100; i++) {
    console.log(a+i);
}

let obj = {
    name:"Henrry",
    role:"Programmer",
    Company:"CodeWithHenrry"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key,element)
}

for (const c of "Harry") {
    console.log(c)
}

// let i = 1;
// while (i<6){
//     console.log(i)
//     i++;
// }

let i = 1;
do {
    console.log(i)
    i++;
} while (condition);