// Desafios

// a) Crie um sistema de classificação de notas:
//  0-59: F -
//  60-69: D -
//  70-79: C -
//  80-89: B -
//  90-100: A-

const prompt = require("prompt-sync")();

let valor = Number(
  prompt("Insira um numero para saber sua classificação no sistema de notas! ")
);

if (valor >= 0 && valor <= 59) console.log("Sua nota e: F");
else if (valor >= 60 && valor <= 69) console.log("Sua nota e: D");
else if (valor >= 70 && valor <= 79) console.log("Sua nota e: C");
else if (valor >= 80 && valor <= 89) console.log("Sua nota e: B");
else if (valor >= 90 && valor <= 100) console.log("Sua nota e: A");
