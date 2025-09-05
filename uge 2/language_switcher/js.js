

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dropdown-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("open");

    });
  });
});





const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
//const locale = "da";

const btn_languageDa = document.querySelector("#languageDa");
const btn_languageDe = document.querySelector("#languageDe");

btn_languageDa.addEventListener("click", () => showThisLanguage("da"));
btn_languageDe.addEventListener("click", () => showThisLanguage("de"));

showThisLanguage(da);
showThisLanguage(de);

function showThisLanguage(lang) {
  texts[lang].texts.forEach((entry) => {
    const el = document.querySelector(entry.location);
    if (el) {
      el.textContent = entry.text;

    }
  });

}

