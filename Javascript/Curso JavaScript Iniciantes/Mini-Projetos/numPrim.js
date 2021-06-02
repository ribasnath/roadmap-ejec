/* Criar função para mostrar números primos
*/

exibirPrim (15);

function exibirPrim (lim)
{
    for (let i = 2; i <= lim; i++)
    {
        let primo = true;

        for (let j = 2; j < i; j++)
        {
            if (i % j === 0)
            {
                primo = false;
                break;
            }
        }

        if (primo)
            console.log(i);
    }
}

/* ou...

[...]

function exibirPrim(lim)
{
    for (let num = 2; num <= lim; num++)
    {
        if (numPrimo(num))
            console.log(num);
    }
}

function numPrimo(num)
{
    for (let div = 2; div < num; div++)
    {
        if (num % div === 0)
            return false;
    }

    return true;
}

*/