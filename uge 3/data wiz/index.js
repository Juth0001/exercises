/*const talElement = document.createElement("p");
document.body.appendChild(talElement);

async function hentData() {
    const response = await fetch("https://kea-alt-del.dk/kata-distortion/");
    const data = await response.json();
    const tal = data.inQueue;
    talElement.textContent = `Tallet er; ${tal}`
    console.log(data);

}

setInterval(hentData, 1000);

hentData();
*/
const bar = document.querySelector("li");
const talElement = document.createElement("p");
talElement.classList.add("tal");
document.body.appendChild(talElement);

let sidsteTal = null;

async function hentData() {
    const response = await fetch("https://kea-alt-del.dk/kata-distortion/");
    const data = await response.json();
    const tal = data.inQueue;


    // Opdater kun hvis tallet har ændret sig
    if (tal !== sidsteTal) {
        talElement.textContent = `Tallet er: ${tal}`;
        //talElement.classList.add("vokser");
        bar.style.setProperty("--height", tal);
        sidsteTal = tal;
    }
}

// Når transitionen er færdig, fjern klassen
talElement.addEventListener("transitionend", () => {
    talElement.classList.remove("vokser");
});

// Opdater hvert sekund
setInterval(hentData, 1000);
hentData();