const btn = document.querySelector("button");
setTimeout(showButton, 1000);

function showButton() {
    btn.classList.remove("hide");
    btn.classList.add("fill-btn");
}

btn.addEventListener("animationend", colorChange);
function colorChange() {
    document.querySelector("body").classList.add("background");
}

document.querySelector("body").addEventListener("mousemove", filledBtn);


function filledBtn() {
    console.log("mousemove fanget");
    btn.classList.add("filled-btn");


}