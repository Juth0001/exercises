/*const bodyElm = document.querySelector("body");

document.querySelector("#theme_select").addEventListener("change", function () {
    console.log(this.value);
});

console.log(getMiddleName("Klaus Dannie Troels"));
function getMiddleName(fullName) {
    return fullName.split(" ")[1];
}

console.log(getFullname("Beyonce", "Knowles"));
function getFullname(firstName = "Beyonce", lastName = "Knowles") {
    const randomMiddleNameArr = ["basse", "Mus", "Fnullergøj", "Trold"];
    const randomMiddleName = randomMiddleNameArr[Math.floor(Math.random() * randomMiddleName)];
    return `${firstName} ${randomMiddleName} ${lastName}`;
}*/

const nameObj = {
    firstName: "Justin",
    LastName: "Timberlake",
};
const nameObj2 = {
    firstName: "Britney",
    LastName: "Spears",
};

getFullname(nameObj);
getFullname(nameObj2);

function getFullname(obj) {
    console.log("first name is", obj.firstName);
}