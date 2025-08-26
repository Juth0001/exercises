const btn = document.querySelector("button")
const input = document.querySelector("input")
const h2 = document.querySelector("h2")

const randomNum = Math.floor(Math.random() * 100) + 1;
/*let brugerGuess ;*/


btn.addEventListener("click", klik_btn);

function klik_btn() {

    console.log("randomNum", randomNum)
    const brugerGuess = parseInt(input.value);
    console.log("type of bruger guress: ", typeof (brugerGuess));
    console.log("brugerGuess", brugerGuess)
    let feedbackText;

    if (brugerGuess === randomNum) {
        feedbackText = "korrekt"
    }
    else if (brugerGuess > randomNum) {
        feedbackText = "for højt"
    }
    else if (brugerGuess < randomNum) {
        feedbackText = "for lavt"
    }

    h2.textContent = feedbackText

    console.log(feedbackText)

}
