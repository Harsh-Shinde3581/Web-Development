document.querySelector('.child').addEventListener('click', (e) => {
    e.stopPropagation();
    alert("Child was Click");
})
document.querySelector('.childcontainer').addEventListener('click', (e) => {
    e.stopPropagation
    alert("ChildContainer was Click");
})
document.querySelector('.container').addEventListener('click', () => {
    alert("Container was Click");
})

document.addEventListener('keydown', (e)=>{
    console.log(e, e.key, e.code);
})

function getRandomColor() {
    let val1 = Math.ceil(+ Math.random() * 255);
    let val2 = Math.ceil(+ Math.random() * 255);
    let val3 = Math.ceil(+ Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}

setInterval(() => {
    document.querySelector('.childcontainer').style.background = getRandomColor();
}, 1000);

// same for setTimeout 