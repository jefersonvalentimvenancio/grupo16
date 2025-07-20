// Exercícios de manipulação de strings

// 1. Declaração e concatenação
const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName;
console.log("Nome completo:", fullName);

// 2. Template strings
const greeting = `Olá, meu nome é ${firstName} ${lastName}!`;
console.log(greeting);

// 3. Propriedades e métodos de strings
console.log("Comprimento do nome:", fullName.length);
console.log("Nome em maiúsculas:", fullName.toUpperCase());
console.log("Nome em minúsculas:", fullName.toLowerCase());

// Desafios   

// a) Extraia o primeiro nome usando slice ou substring  
// Extrai o primeiro nome de uma string usando a posição do primeiro espaço como delimitador. O uso de slice() e indexOf() permite uma extração eficiente e precisa do primeiro nome em uma string de nome completo 
const onlyFirstName = fullName.slice(0, fullName.indexOf(" "));
console.log("Primeiro nome:", onlyFirstName);

// b) Verifique se o nome completo contém a letra 'a'
const hasLetterA = fullName.includes("a");
console.log("O nome completo contém a letra 'a'?", hasLetterA);

// c) Substitua "Silva" por outro sobrenome usando replace
const newLastName = "Gurgel";
const changedFullName = fullName.replace("Silva", newLastName);
console.log("Nome trocando o sobrenome:", changedFullName);
