/*
Nome: Maria Eduarda Freitas
5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.
*/
var teclado = require("prompt-sync")();
var vetor = new Array(10);
var crescente = 0;
for (var x = 1; x <= 9; x++) {
    vetor[x] = parseInt(teclado("Digite o ".concat(x, " n\u00FAmero: ")));
    for (var y = 1; y <= 9; y++) {
        if (vetor[x] < vetor[y]) {
            crescente = vetor[x];
            vetor[x] = vetor[y];
            vetor[y] = crescente;
        }
    }
}
for (var x = 1; x <= 9; x++) {
    console.log("Em ordem crescente: ".concat(vetor[x]));
}
