/* Criar uma função que exibe a quantidade de *
que aquela linha possui.
*/

exibirAst(10);

function exibirAst(lin)
{
    let pat = '';

    for (let i = 1; i <= lin; i++)
    {
        pat += '*';
        console.log(pat);
    }
}

/* ou...

[...]

for (let linha = 1; linha <= lin; linha++)
{
    let padrao = '';

    for (let i = 0; i < lin; i++)
    {
        padrao += '*';
    }
    console.log(padrao);
}

*/