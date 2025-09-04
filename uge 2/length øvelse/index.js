/*
const name = "Julie";
const len = name.length;
console.log(`${name} is ${len} caracters long`);
const letter = name[0];
console.log(`the first letter of ${name} is ${letter}`);
*/

const name = "Albus Percival Wulfic Brian Dumbledor";
const firstName = name.substring(0, 5);
const lastNames = name.substring(5);
const len = name.length;
console.log(`${name} is ${len} caracters long`);
const letter0 = name[0];
const letter2 = name[2];
const letter6 = name[6];
const firstD = name.indexOf("D");
const lastFirstE = name.indexOf("last e");

console.log(`the first letter of ${name} is ${letter0}`);
console.log(`the first letter of ${name} is ${letter2}`);
console.log(`the first letter of ${name} is ${letter6}`);
console.log(`the first "D" in ${name} is on index ${firstD}`)
console.log(`the last first "e" in ${name} is on index ${lastFirstE}`)
console.log(`${firstName}`);
console.log(`${lastNames}`);