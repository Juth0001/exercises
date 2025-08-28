/*
function myFunc() {
    let value;
    return value;
}

let result = myFunc();
*/





function greeting(firstName) {
    return `hello ${firstName}`;
}
//const greetingToklaus = greeting("Klaus");
/*
const personTogreet = "klaus";

const greetingToklaus = greeting(personTogreet);

console.log(greetingToklaus);
*/



/*
const areaInSquareFeet = convertToSquareFeet(number);
console.log(areaInSquareFeet);
//det er det samme som - console.log(convertToSquareFeet(number));


const areaInSquareFeet = convertToSquareFeet(calculateRectangleAre(number, number));
*/
function lengthOfStr(str) {
    return str.length;
}
console.log(lengthOfStr(greeting("Klaus")));
//const greetingToklaus = greeting("klaus");



function beregnMoms(belob, moms = 25) {
    const belob = "200";
    const moms = 1.25

}
console.log(belob * moms);