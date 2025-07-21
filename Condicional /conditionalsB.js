//  b) Verifique se um número é par ou ímpar

const prompt = require("prompt-sync")();

let valor = Number(prompt("insira o numero para saber se ele e par ou impar!"));

//if (valor % 2 == 0) {
//    console.log(valor + " é um numero Par!")
//} else {
//    console.log(valor + " é um numero impar!")
//}

valor % 2 == 0
  ? console.log(valor + " é um numero Par!")
  : console.log(valor + " é um numero impar!");
