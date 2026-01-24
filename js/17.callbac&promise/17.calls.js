console.log("Henrry is a hacker")
console.log("I am a hacker too");

setTimeout(() => {
    console.log("I am inside a setTimeout function");
}, 1000);

console.log("The End")

const fn =() => {
    console.log("I am a function");
}

const callback = (arg) => {
    console.log(arg);
    fn();
};

const loadScript = (src, callback) => {
 let sc = document.createElement("script");
 sc.src = src;
 sc.onload = callback("Kenny")
 document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);