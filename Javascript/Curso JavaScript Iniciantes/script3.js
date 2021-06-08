/* Introdução a arrays

- Como adicionar novos elementos
- Como encontrar elementos
- Como remover elementos
- Como dividir elementos
- Como divir arrays
- Como combinar arrays

*/

// 1 - add elementos a um array
const numeros = [1, 2, 3];

// Início
numeros.unshift(0);
console.log(numeros);

// Meio
numeros.splice(1, 0, 'n'); // índice, deletar?, oq quer add
console.log(numeros);

// Final
numeros.push(33);
console.log(numeros);


//++++++++++++++++++++


// 2 - encontrar elementos em um array
const num = [1, 2, 3, 4, 5, 2];

/* Checar a existência de um elemento
Caso o elemento exista => ele retornará o índice
Caso não exista => vai retornar -1
*/
console.log(num.indexOf(20));

/* Checar a última ocorrência do elemento
retornará o índice da última vez que o elemento aparece
*/
console.log(num.lastIndexOf(2))

/* retorna true/false para números inclusos/não-inclusos
=> seria o mesmo que console.log(numeros.indexOf(2) !== -1)
*/
console.log(num.includes(4));


// 2.1 - encontrar elementos de tipos de referência

const marcas = [
    {id : 1, nome: 'a'},
    {id : 2, nome: 'b'},
    {id : 3, nome: 'c'},
    {id : 4, nome: 'd'},
    {id : 5, nome: 'e'},
    {id : 6, nome: 'f'}
];

const marca = marcas.find (function(marca)
{
    return marca.nome === 'a';
});

console.log(marca);


/* 2.2 - Arrow functions

Forma mais fácil de fazer o find com apenas um parâmetro

*/

console.log(marcas.find(marca => marca.nome === 'a'));


//++++++++++++++++++


// 3 - Remover elementos do array

const n = [1, 2, 3, 4, 5, 6];
console.log(n);

// Final
console.log(n.pop());
console.log(n);

// Início
console.log(n.shift());
console.log(n);

// Meio
console.log(n.splice(3, 1)); //índice, quantos quer deletar
console.log(n);


//++++++++++++++++++


// 4 - esvaziando array

let n2 = [1, 2, 3, 4, 5, 6, 7];
let dnv = n2;

/* Solução 1 - remove apenas a referência inical
n2 = [];

Solução 2 - remove todas as referências (melhor jeito)
n2.length = 0;
console.log(n2);
console.log(dnv);

Solução 3 - remove todas as referências
n2.splice(0, n2.length);
console.log(n2);
console.log(dnv);

Solução 4 - remove tudo, mas consome muito processamento
while (n2.length > 0)
n2.pop();
console.log(n2);
*/


//++++++++++++++++++


// 5 - Combinando e dividindo arrays
const primeiro = [1, 2, 3, 4, 5];
const segundo = [6, 7, 8, 9, 10];

// combinar
const comb = primeiro.concat(segundo)
console.log(comb);

// dividir
const div = comb.slice(1, 3); // => índice inicial, índice final -1
console.log(div);


// 5.1 - operador spread

const p = [11, 12, 13, 14];
const s = [15, 16, 17];

// combinar
const c = [...p, 'n', ...s];
console.log(c);

// clonar
const clone = [...c];
console.log(clone);

//

const ex = [...p, '%', ...s];
console.log(ex);


//++++++++++++++++


// 6 -  Iterando um array - Foreach
const n3 = [1, 2, 3, 4, 5];

/*n3.forEach(function(num){
    console.log(num);
});
*/

// reduzido
n3.forEach((num, indice) => console.log(indice, num));


//+++++++++++++++


// 7 - Combinando arrays
const numbers = [1, 2, 3, 4, 5];

const c2 = numbers.join('.'); // => adicionará um ponto entre os números
console.log(c2);

const f = 'mensagem bacana legal lindona';
const result = f.split (' '); // => separa cada palavra em um índice
console.log(result);

console.log(result.join('-'));


//+++++++++++++++


/* 8 - Input

prompt(pergunta aqui)

*/

let corFav = prompt('Olá, qual sua cor favorita?');
if (corFav == 'verde')
{
    alert('A minha também');
}