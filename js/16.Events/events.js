let button = document.getElementById('btn');

button.addEventListener('click', ()=> {
    document.querySelector(".box").innerHTML ="<b>Found out that you clicked the button!</b>Enjoyyy!"
});

button.addEventListener('contextmenu', () => {
    // Event.preventDefault();
    alert("Correct Right Click");
});
