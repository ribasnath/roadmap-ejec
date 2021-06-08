/* Factory Functions
  Cria objetos de maneira otimizada, assim não precisa criar 500 objetos de uma vez (basta criar uma vez)
*/

function criarCelular(marca, tamanhoTela, capBateria)
{
  return {
    marca,
    tamanhoTela,
    capBateria,
    ligar() {
      console.log("Fazendo ligação...")
    }
  }
}

const celular1 = criarCelular("Motorola", 6.1, 5000);
console.log(celular1);

//===============

function cadastro(nome, usuario, email, senha)
{
  return {
    nome,
    usuario,
    email,
    senha
  }
}

let pessoa1 = cadastro("nathalia", "konath", "ribasnathalia9@gmail.com", "1234");
console.log(pessoa1);


//================


/*Constructions Functions
  diferença: um você cria dentro da função, o outro você cria através do 'new' => um você retorna o objeto, outro você cria quando instancia ele

*/

function Celular(marcaC, tamanhoT, capBat)
{
  this.marcaC = marcaC,
  this.tamanhoT = tamanhoT,
  this.capBat = capBat,
  this.liga = function () {
    console.log("Fazendo Ligação....");
  }
}

const celular = new Celular('asus', 5.5, 5000);
console.log(celular);

//============

function Cadastro(nome, sobrenome, cpf)
{
  this.nome = nome,
  this.sobrenome = sobrenome,
  this.cpf = cpf,
  this.aprovado = function () {
    console.log("Aprovado");
  }
}

let pessoa2 = new Cadastro ("nathalia", "ribas", 12345678900);
console.log(pessoa2);


//=================


/* Natureza dinâmica de Objetos
  
  os objetos no js são totalmente dinâmicos, podendo alterar, deletar ou adicionar novas propriedades ao longo do código
  
*/

const mouse = {
  cor : 'black',
  marca : 'dazz',
}

mouse.velocidade = 5000.
mouse.trocarDPI = function(){
  console.log('mudando DPI');
}
delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse);


//====================


/*Clonando Objetos*/

const celular2 = {
    marca : 'Motorola',
    tamanhoTela : {
      vertical : 155,
      horizontal : 75
    },
    ligar() {
      console.log("Fazendo ligação...");
    }
}

const novoObjeto = Object.assign({
  bateria : 5000
}, celular)
console.log(novoObjeto);

const objeto2 = {...celular}
console.log(objeto2)

//====

let filme = {
  nome : 'A Era do Gelo',
  ano : 2002,
  genero : 'desenho animado',
}

console.log(filme);

let novoFilme = Object.assign({
    duracao : '1h'
}, filme);
console.log(novoFilme);

let filme3 = {...filme}
console.log(filme3);


//==========================


/* Math

Math.random
Math.max()
Math.min()
Math.PI
Math.sin(x)
Math.E

(.... mais? clica no 'link')

*/


//=======================


/* Strings
  
mensagem2.length
mensagem2[6]

mensagem.includes('dia') => true
mensagem.includes('olá') => false
mensagem.startWith('bom') => true
mensagem.indexOf('bom')
mensagem.replace('dia', 'almoço')
mensagem.trin() => tira os espaços do inicio/fim
mensagem.split(' ') => quebra a frase a cada espaço

*/

//tipo primitivo
let mensagem = 'bom dia'

//tipo objeto
let mensagem2 = new String('bom dia');


//=======================


/* Template Literal

uso dos caracteres ``
mantém toda a formatação posta dentro da mensagem

${pode colocar qualquer tipo de código dentro das chaves}

*/

const mensagem6 = `alguma 'mensagem' aqui`;

const nome = 'Nathália';

let mensagemB =
`Olá ${nome}

Seja bem vindo(a) ao nosso site!

Aqui você encontrará informações sobre ursos polares.

Divirta-se!`;


//========================


/* Date

tipo nome = new Date();

date.get-- : extrai informações de um objeto date
date.set-- : altera informações

date.toDateString() : mostra em forma de string
date.toISOString() : 2021-06-07

*/

const data1 = new Date(); // data atual
const data2 = new Date('June 07 2021 18:56');
const date3 = new Date(2021, 05, 07, 19, 16); // ele começa a contar os meses do 0, então precisa ser sempre -1

date3.setFullYear(1980);