/*UGE 1 FRONTEND*/
let number = Math.floor(Math.random() * 101);
console.log(number);
document.getElementById("Number").textContent = number;

/*function brugerTal() {
    let tal = document.getElementById("brugerInput").value;

    document.getElementById("output").textContent="your number:"+tal
}*/
function readInput (){
    return Number (document.getElementById("brugerInput").value);
}

/*document.querySelector("button").addEventListener("click", compare);*/

function brugerTal(){
let guess = Number(document.getElementById("brugerInput").value);

if (guess === number) {
    document.getElementById("output").textContent ="CORRECT!!";
}
else if(guess > number){
    document.getElementById("output").textContent ="Too High";
}
else if(guess < number){
    document.getElementById("output").textContent ="Too Low";
}
else {
    document.getElementById("output").textContent ="Insert Guess";
}
}
/*UGE 1 FRONTEND*/