//variavel + aparecer no console
// let idade = 100;
// console.log(idade);
// let altura = 158;
// console.log(altura);

let nomeCompleto = 'Nathália Ribas';
let idade = 19;
let altura = 158;
console.log("Variáveis");
console.log("nome: ", nomeCompleto);
console.log("idade: ", idade);
console.log("altura: ", altura, "cm");

//-----------------------------------------

const valorGeral = 80;
console.log("Constantes");
console.log("Valor permanente: ", valorGeral, "reais");

//-----------------------------------------
//tipos de valores

let nome = 'Nathalia' // string literal
let idade2 = 19 // number literal
let estaAprovado = true // boolean
let sobrenome; // undefined
let corSelecionada = null // redefinir um valor

//-----------------------------------------
/*tipos de referência
- objetos
- arrays
- functions
*/

//objeto
console.log("Objeto");
let pessoa = {
    nome: 'Nathalia',
    idade: 19,
    estaAprovado: true,
    sobrenome: 'Ribas'
};

console.log(pessoa);

//arrays
console.log("Arrays");
let primos = [2, 3, 5, 7, 11, 13];
console.log(primos);
console.log(primos.length);

//functions
console.log("Functions");
let corSite = 'azul';
function resetaCor(cor, tonalidade)
{
     corSite = cor + tonalidade;
};

console.log(corSite);
resetaCor('azul', ' marinho');
console.log(corSite);

//tipos de functions
function dizerNome()
{
    console.log('Nathalia');
}

dizerNome();

function dividirPorDois(valor)
{
    return valor / 2;
}

console.log(dividirPorDois(60));

//-----------------------------------------

console.log("Operações");

// Op. aritméticas (+, -, *, /, **)
console.log("Op. Aritmeticas");
let salario = 100;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);

// ++ -- (incremendo/decremento)
console.log("Incremento/decremento");
let idade3 = 19;
console.log(++idade3);
console.log(--idade3);

// Op. de atribuição (=)
console.log("Atribuição");
let valor1 = 100;
valor1 += valor1;
//valor1 -= valor1;
console.log(valor1);

// Op. de comparação
console.log("Op. de comparação");
// Igualdade estrita (===): compara o valor e o tipo
console.log('1' === 1);

// Igualdade solta (==): compara apenas o valor
console.log('1' == 1);

// Op. ternário
console.log("Op. Ternário");
let pontos = 150;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

// Op. Lógicos
// &&: retorna TRUE se os dois forem true
// ||: retorna TRUE quando pelo menos um é true
// NOT (!): negação
console.log("Op. Lógicos");
console.log(true && false);
console.log(true || false);

let maiorDeIdade = true;
let temCarteiraMotorista = true;
let aprovacao = maiorDeIdade && temCarteiraMotorista;
console.log(aprovacao);

let reprovado = !aprovacao;
console.log(reprovado);

// Comparações não booleanas
/* Falsy:
undefined
null
0
false
'' (string vazio)
NaN (not a number) */

let corPersonalizada = '';
let corPadrao = 'Rosa';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);

//--------------------------------------

// If... Else
/* if (condição) {}
else if (condição) {}
else {} */

let num = 10;
let ma = num > 10 ? true : false;

if (num % 2 == 0 && ma == true) {
    console.log("O número é par e maior que 10!");
}
else if (num % 2 == 0  && ma == false) {
    console.log("O número é par e menor que 10!");
}
else if (num % 2 != 0 && ma == true) {
    console.log("O número é ímpar e maior que 10!")
}
else {
    console.log("O número é ímpar e menor que 10!");
}

// Switch... case
/* switch (variavel) {
    case 1:
        codigo;
    break;
} */

let permissao;
permissao = "gerente";

switch (permissao){
    case 'comum':
        console.log("Usuário comum!");
    break;

    case 'gerente':
        console.log("Usuário gerente!");
    break;

    case 'diretor':
        console.log("Usuário diretor!");
    break;

    default:
        console.log("Usuário não reconhecido!");
}


//--------------------------


/* Laço for 

for(let i = 0; i < 5; i++) {
    codigo
}

*/

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0)
    {
        console.log(i);
    }
}

let result;
console.log("-x-x- Tabuada do 5 -x-x-")
for (let n = 1; n <= 10; n++)
{
    result = n * 5;
    console.log("5 x ", n, " = ", result);
}

//--------------------------

/* laço while

while (condição) {}

*/

let j = 10;

while (j >= 1)
{
    if(j % 2 == 0) {
        console.log(j);
    }

    j--;
}

//--------------------------

/* do... while

do {
    comando
}
while (condição)

*/

let m = 0;

do
{
    console.log("digitando...");

    m++;
}
while (m < 10)

//--------------------------

/* for... in

especifico para propriedades de objetos ou elementos de arrays

for (let key in --)

*/

const pessoa = {
    nome : 'Nathalia',
    idade : 19
}

for (let key in pessoa)
{
    console.log(key, pessoa[key]);
}

const cores = ['Verde', 'Preto', 'Amarelo'];

for (const index in cores) {
    console.log(index, cores[index]);
}

//--------------------------

/* for... of
    for(let -- of --)
*/

for (let cor of cores) {
    console.log(cor);
}