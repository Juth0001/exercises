const name = "Albus Percival Wulfic Brian Dumbledor";
const name1 = "AlBus";

//const firstName = name.substring(0, 5);
const firstName = name.substring(0, name.indexOf(" "));

//const lastNames = name.substring(5);
const lastNames = name.substring(0, name.indexOf(" ") + 1, name.lastIndexOf(" ")); //mellemnavn
//efternavn
//const firstName = name.substring(name.lastIndexOf(" "));


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
console.log(`the first "D" in ${name} is on index ${firstD}`);
console.log(`the last first "e" in ${name} is on index ${lastFirstE}`);
console.log(`${firstName}`);
console.log(`${lastNames}`);
console.log(`the last " " in ${name} is on index ${lastFirstSpace}`);

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());