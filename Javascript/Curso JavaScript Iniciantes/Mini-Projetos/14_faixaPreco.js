/* Faixa de preço

Criar um array de objetos de faixa de preço como a do mercado livre, terá:

tooltip, minimo, maximo

*/

function criarFaixa (tooltip, min, max)
{
    return {
        tooltip,
        min,
        max
    }
}

let faixaCelular = [
    criarFaixa ('até R$650', 0, 700),
    criarFaixa ('R$650 a R$1.500', 650, 1500),
    criarFaixa ('Mais de R$1.500', 1500, 9999999)
];

console.log(faixaCelular);


/*

ou...

let faixas = [
    {
        tooltip : 'até R$650',
        minimo : 0,
        maximo : 700
    },
    {
        tooltip : 'R$650 a R$1.500',
        minimo : 650,
        maximo : 1500
    },
    {
        tooltip : 'Mais de R$1.500',
        minimo : 1500,
        maximo : 9999999
    }
]

console.log(faixas);

*/
