/*
Nome: Maria Eduarda Freitas
3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
*/

const teclado = require (`prompt-sync`)();

let maior: number = 0
let maiorVetor: number [] = new Array (10);


for (let x = 1; x <= 10; x++){
    maiorVetor[x] = parseInt(teclado(`Digite o ${x} número: `));
    if (maiorVetor[x] > maior){
        maior = maiorVetor[x];
    }   
}
console.log(maior);