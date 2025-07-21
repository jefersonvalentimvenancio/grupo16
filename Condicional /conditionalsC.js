// c) Crie uma verificação que diga se uma pessoa pode dirigir conditionals.js
// (precisa ser maior de idade E ter habilitação)

const prompt = require("prompt-sync")();

let valor = Number(
  prompt("insira sua idade para saber se  voçê pode dirigir ! : ")
);
let entrada = prompt(
  "Digite 'true' caso tenha Habilitação ou 'false'caso não possua habilitação "
);
let valorBooleano = entrada.toLowerCase() === "true";

function podeDirrigir() {
  if (valor >= 18 && valorBooleano) {
    return console.log("Voçê pode dirigir!");
  } else return console.log("Voçê não pode dirigir!");
}

podeDirrigir();
