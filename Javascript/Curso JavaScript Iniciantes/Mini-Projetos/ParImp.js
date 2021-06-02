/* Fazer um código que:
recebe uma quantidade de valores para avaliar
função exibe se cada valor é par ou ímpar
*/

exibir(10);

function exibir(lim)
{
    let i;

    for(i = 0; i < lim; i++)
    {
        if(i % 2 === 0)
            console.log(i, "PAR");
        else
            console.log(i, "ÍMPAR");
    }
}
