// ### Exercício 6: Desafio Integrador (30 minutos)

// **Objetivo**: Aplicar todos os conceitos aprendidos em conjunto.

// 1. Crie um arquivo `final-challenge.js`:

// ```jsx
// // Desafio final - integrando todos os conceitos



// #### Desafios

// a) Para cada aluno, calcule a média das notas [ X ]
// b) Determine se cada aluno foi aprovado ou reprovado (média >= 70 para aprovar) [ X ]
// c) Conte quantos alunos foram aprovados e quantos foram reprovados [ X ]
// d) Encontre o aluno com a maior média [ X ]
// e) Calcule a média geral da turma [ X ]

// > Use console.log() para mostrar todos os resultados com mensagens claras

// dados dos alunos

const students = [
   { name: "João", age: 20, grades: [85, 90, 78] },
   { name: "Maria", age: 19, grades: [92, 95, 89] },
   { name: "Pedro", age: 21, grades: [70, 65, 80] },
   { name: "Ana", age: 18, grades: [60, 75, 68] },
   { name: "Carlos", age: 22, grades: [90, 88, 92] },
];

console.log("                               ");
console.log("Médias dos Alunos:");
console.log("                               ");

const mediaAlunos = students.map(student => {
   const total = student.grades.reduce((acc, grade) => acc + grade, 0);
   const media = total / student.grades.length;

   return console.log(`A média de ${student.name} é ${media.toFixed(2)}`);
});

console.log("------------------------------")
console.log("                               ");
console.log("Aprovados e reprovados:");
console.log("                               ");


const aprovados = students.filter(student => {
   const total = student.grades.reduce((acc, grade) => acc + grade, 0);
   const media = total / student.grades.length;
   return console.log(`${student.name} foi ${media >= 70 ? 'aprovado' : 'reprovado'} com média ${media.toFixed(2)}`);
});

console.log("------------------------------")
console.log("                               ");
console.log("Quantidade de alunos aprovados e reprovados:");
console.log("                               ");

const totalAprovados = students.filter(student => {
   const total = student.grades.reduce((acc, grade) => acc + grade, 0);
   const media = total / student.grades.length;
   return media >= 70;
})

if (totalAprovados.length > 0) {
   console.log(`Total de alunos aprovados: ${totalAprovados.length}`);
   console.log(`Total de alunos reprovados: ${students.length - totalAprovados.length}`);
} else {
    console.log("Nenhum aluno foi aprovado.");
}

console.log("------------------------------")
console.log("                               ");
console.log("Aluno com maior média:");
console.log("                               ");

const alunoMaiorMedia = students.reduce((prev, current) => {
    const totalPrev = prev.grades.reduce((acc, grade) => acc + grade, 0);
    const mediaPrev = totalPrev / prev.grades.length;
    
    const totalCurrent = current.grades.reduce((acc, grade) => acc + grade, 0);
    const mediaCurrent = totalCurrent / current.grades.length;
    
    return mediaPrev > mediaCurrent ? prev : current;
});

console.log(`${alunoMaiorMedia.name} com média ${(alunoMaiorMedia.grades.reduce((acc, grade) => acc + grade, 0) / alunoMaiorMedia.grades.length).toFixed(2)}`);



console.log("------------------------------")
console.log("                               ");
console.log("Média geral dos alunos:");
console.log("                               ");

const mediaGeral = students.reduce((acc, student) => {
    const total = student.grades.reduce((sum, grade) => sum + grade, 0);
    return acc + (total / student.grades.length);
}, 0);

console.log(`A média geral da turma é ${(mediaGeral / students.length).toFixed(2)}`);

// finalized

