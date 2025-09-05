//opgave 3 og 4 eksempel fra torsdag

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
const lastFirstSpace = name.indexOf("last ` `");

console.log(`the first letter of ${name} is ${letter0}`);
console.log(`the first letter of ${name} is ${letter2}`);
console.log(`the first letter of ${name} is ${letter6}`);
console.log(`the first "D" in ${name} is on index ${firstD}`)
console.log(`the last first "e" in ${name} is on index ${lastFirstE}`)
console.log(`${firstName}`);
console.log(`${lastNames}`);
console.log(`the last " " in ${name} is on index ${lastFirstSpace}`)

// opgave 5 (locale compare)

const months = ["Alerup", "Aalborg",];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array = [1, 30, 4, 21, 100000];
array.sort();
console.log(array);
// Expected output: Array [1, 100000, 21, 30, 4]



// opgave 6 (padStart . padEnd)
const prikker = "..........................";
const lang = prikker.length;
console.log(`${prikker} is ${lang} caracters long`);