/*
Nome: Maria Eduarda Freitas
5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.
*/

const teclado = require(`prompt-sync`)();


let vetor: number [] = new Array (10);
let crescente = 0


for (let x = 1; x <= 9; x++){
    vetor[x] = parseInt(teclado(`Digite o ${x} número: `));
    for (let y = 1; y <= 9; y++){
        if (vetor[x] < vetor[y]){
        crescente = vetor[x];
        vetor[x] = vetor[y];
        vetor[y] = crescente;
        }
    }
}

for (let x = 1; x <= 9; x++){
    console.log(`Em ordem crescente: ${vetor[x]}`);
}