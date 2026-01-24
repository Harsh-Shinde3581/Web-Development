console.log("My name is Don");

let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes[1].style.backgroundColor = "red";
boxes[2].style.backgroundColor = "blue";
document.getElementById("orange").style.backgroundColor = "orange";
document.querySelector(".box").style.backgroundColor = "green";
document.querySelectorAll(".box1").forEach(e=> {
    e.style.backgroundColor = "yellow";
});