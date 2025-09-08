/*
const name = "julie bo hartvig alstrup therkelsen";
const firstName = name.substring(0, 5);
const middleNames = name.substring(6, 16)
const lastNames = name.substring(17, 35);
const len = name.length;
console.log(`${name} is ${len} caracters long`);

console.log(`${firstName}`);
console.log(`${middleNames}`);
console.log(`${lastNames}`);


console.log(name.toUpperCase());
console.log(name.toLowerCase());


let result = name.slice(0, 0) + name.charAt(0).toUpperCase() + name.slice(1);
console.log(result);
*/

/*
const theName = "hAnSE";
const threeCapitalised1 = theName.substring(0, 2).toLowerCase();
const threeCapitalised2 = theName.substring(2, 3).toUpperCase();
const threeCapitalised3 = theName.substring(3, 4).toUpperCase();

console.log(threeCapitalised);
*/


console.log(threeCapi("vAldeMAR"));
function threeCapi(theName) {
    return theName.substring(0, 1).toUpperCase() + theName.substring(1).toLowerCase();
}