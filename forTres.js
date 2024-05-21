/*
Nome: Maria Eduarda Freitas
3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
*/
var teclado = require("prompt-sync")();
var maior = 0;
var maiorVetor = new Array(10);
for (var x = 1; x <= 10; x++) {
    maiorVetor[x] = parseInt(teclado("Digite o ".concat(x, " n\u00FAmero: ")));
    if (maiorVetor[x] > maior) {
        maior = maiorVetor[x];
    }
}
console.log(maior);
