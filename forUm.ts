/*
Nome: Maria Eduarda Freitas
1 – Calcule a soma de todos os números de 0 ao 50, essa
soma deve fazer uso do laço de repetição for.
*/

let soma: number = 0

for(let x = 0; x <= 50; x++){
    soma = soma + x;
}
console.log(`A soma dos números entre 0 e 50 é ${soma}`);