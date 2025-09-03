//først array functioner, Push
//derefter lave elementer og give dem værdier


//har et array der ksubber en ud i den ene ende < - og skubber en ind i den anden ende ->
//  randomfunctionen skal også bruges

//der hvor højden er skal der et tilfældigt tal ind!!!!



//const randomNum = Math.floor(Math.random() * 100) + 1;
const list = document.querySelector("ul");

function getRandomNum(max) {
    return Math.floor(Math.random() * max) + 1;
}



const firstNum = getRandomNum(100);
const li = document.createElement("li");
li.style.setProperty("--height", firstNum);
list.appendChild(li);
stats.push(firstNum);

setInterval(genererSoejle, 1000);



function genererSoejle() {
    console.log("genererSoejle");
    const li = document.createElement("li");
    const randomNum = getrandomNum(100);
    stats.push(randomNum);

    li.style.setProperty("--height", randomNum);
    list.appendChild(li);


}

setInterval(genererSoejle, 1000);

for (let i = 0; i < 5; i++) {
    genererSoejle();
}


/*
const list = document.querySelector("ul");

const barArr = [];

setTimeout(generateBars, 500);

function generateBars() {
    //const randomNum= Math.floor(Math.random * 100);
    barArr.push(Math.round(Math.random * 100));


    if (barArr.length > 6) {
        barArr.shift();
    }
    console.log(barArr);
    render();
}


function render() {
    document.querySelectorAll("li").forEach((elm, i) => {
        elm.style.setProperty("--heigt", barArr[i]);
        console.log("elm", elm);
        console.log("i", i);
        console.log("arr", arr);

    });

}
*/

