console.log("This is Promises");
let prom1 = new Promise((resolve, reject) => {
       let a = Math.random();
       if (a < 0.5) {
           reject("Error: Random number is less than 0.5");
       } else {
           resolve("Success: Random number is greater than or equal to 0.5");
       }  

       setTimeout(() => {
        console.log("Yes Iam done")
        resolve("Henrry")
       }, 3000)
})

prom1.then((a) => {
    console.log("I am inside then")
    console.log(a) 
}).catch((err) => {
    console.log(err)
})
