let a = 6

function factorial(number){
    let ar = Array.from(Array(number+1).keys())
    console.log(ar.slice(1,))
    let c = ar.slice(1,).reduce((a,b)=>{
       return a*b
    })
    return c
 
        if (number < 0){
            return "Factorial is not defined for negative numbers";
}
}

// OR 

function facFor(number){
    let fac = 1
    for(let index = 1 ; index <= number; index++){
        fac = fac * index
    }
    return fac
}
console.log(factorial(a))
console.log(facFor(a))