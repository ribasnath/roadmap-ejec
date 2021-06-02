/* Criar função que retorna a soma de todos os múltiplos
de 3 e 5 em um determinado intervalo. */

somar(20);

function somar(lim)
{
    let mult_tres = 0;
    let mult_cin = 0;

    for (let i = 0; i <= lim; i++)
    {
        if(i % 3 === 0)
            mult_tres += i;
        if(i % 5 === 0)
            mult_cin += i;
    }

    console.log(mult_cin + mult_tres);
}