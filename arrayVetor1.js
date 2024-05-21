/*
Nome: Maria Eduarda Freitas
1 – Faça dois vetores, um que contenha cada dia da semana,
o outro que contenha sete atividades/hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores.
*/
//                indíce =        0               1             2               3                 4            5            6
var meuArrayUm = ["Domingos", "Segundas-Feiras", "Ter\u00E7as", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S\u00E1bado"];
var meuArrayDois = ["vai a Igreja", "tricotar", "limpa a Casa", "passear com seus netos", "fazer as compras da semana", "ch\u00E1 da tarde", "assiste aos novos cap\u00EDtulos de sua novela preferida"];
console.log("Aos ".concat(meuArrayUm[0], " Dona Flora ").concat(meuArrayDois[0], ", j\u00E1 as ").concat(meuArrayUm[1], " ela prefere ").concat(meuArrayDois[1], ". \nAs ").concat(meuArrayUm[2], " ela ").concat(meuArrayDois[2], ", para que na ").concat(meuArrayUm[3], " esteja livre para ").concat(meuArrayDois[3], ", e para que na \n").concat(meuArrayUm[4], " ela possa ").concat(meuArrayDois[4], ". Quando chega ").concat(meuArrayUm[5], " ela se reune com suas amigas para fazer um \n").concat(meuArrayDois[5], ", e ao chegar o ").concat(meuArrayUm[6], ", ela descansa enquanto ").concat(meuArrayDois[6]));
