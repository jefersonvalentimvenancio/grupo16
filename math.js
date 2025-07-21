const a = 10;
const b = 3;

console.log("adição:", a+b);
console.log("subtrção:", a-b);
console.log("multiplicaçaõ:", a*b);
console.log("divisão:", a/b);
console.log("módulo:", a%b);
console.log("exponecciação:", a**b)

let counter =5;
console.log("valor inicial:", counter);
console.log("pós-incremento:", counter++);
console.log("novo valor:", counter);
console.log("pré-incremento:",++counter);
console.log("valor final:", counter);


const numberAsString = "42";
console.log("String original:", numberAsString, typeof numberAsString);

const convertedNumber = Number(numberAsString);
console.log("Depois de converter:", convertedNumber, typeof convertedNumber);




//exercicios


const num1 = 15;
const num2 = 25;
const num3 = 38;

const media = (num1 + num2 + num3) / 3;
console.log("Média de 15, 25 e 38:", media);


//b


const strNumber = "123.45";
const convertedFloat = parseFloat(strNumber);

console.log("String convertida para número:", convertedFloat, typeof convertedFloat);


// c
const resultado = 9.7 / 2;
const arredondado = Math.round(resultado);

console.log("9.7 dividido por 2:", resultado);
console.log("Arredondado:", arredondado);