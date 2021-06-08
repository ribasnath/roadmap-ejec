/* Criar um endereço, com as infos:

Rua
Cidade
CEP
exibirEndereco(endereco)

*/

let endereco = {
    rua : 'd',
    cidade : 'porto alegre',
    cep : '12345678',
}

function exibirEndereco (endereco)
{
    for (let key in endereco)
        console.log(key, endereco[key]);
}

exibirEndereco (endereco);