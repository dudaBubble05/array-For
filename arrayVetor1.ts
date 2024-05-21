/*
Nome: Maria Eduarda Freitas
1 – Faça dois vetores, um que contenha cada dia da semana,
o outro que contenha sete atividades/hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores.
*/

//                indíce =        0               1             2               3                 4            5            6
let meuArrayUm : string [] = [`Domingos`, `Segundas-Feiras`, `Terças`, `Quarta-feira`, `Quinta-feira`, `Sexta-feira`, `Sábado`];

let meuArrayDois : string [] = [`vai a Igreja`, `tricotar`, `limpa a Casa`, `passear com seus netos`,
`fazer as compras da semana`, `chá da tarde`, `assiste aos novos capítulos de sua novela preferida`];

console.log(`Aos ${meuArrayUm[0]} Dona Flora ${meuArrayDois[0]}, já as ${meuArrayUm[1]} ela prefere ${meuArrayDois[1]}. 
As ${meuArrayUm[2]} ela ${meuArrayDois[2]}, para que na ${meuArrayUm[3]} esteja livre para ${meuArrayDois[3]}, e para que na 
${meuArrayUm[4]} ela possa ${meuArrayDois[4]}. Quando chega ${meuArrayUm[5]} ela se reune com suas amigas para fazer um 
${meuArrayDois[5]}, e ao chegar o ${meuArrayUm[6]}, ela descansa enquanto ${meuArrayDois[6]}`);