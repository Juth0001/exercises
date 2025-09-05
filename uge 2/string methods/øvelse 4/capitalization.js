
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

