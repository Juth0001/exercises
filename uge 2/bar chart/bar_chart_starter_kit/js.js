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
    }
    ); {

    }
}