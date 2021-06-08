/* Criar dois objetos 'endereços' e compará-los

1 - ver se os valores são iguais
2 - ver se as referências são iguais

*/

function Endereco (rua, cidade, cep)
{
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

let endereco1 = new Endereco ('rua d', 'porto alegre', '12345678');
let endereco2 = new Endereco ('rua d', 'porto alegre', '12345678');

function valIguais (endereco1, endereco2)
{
    console.log("Os valores são iguais?");

    return endereco1.cep === endereco2.cep &&
           endereco1.cidade === endereco2.cidade &&
           endereco1.rua === endereco2.rua;
}

console.log(valIguais(endereco1, endereco2));

function refIguais (endereco1, endereco2)
{
    console.log("Os endereços de memória são iguais?");

    return endereco1 === endereco2;
}

console.log(refIguais(endereco1, endereco2));