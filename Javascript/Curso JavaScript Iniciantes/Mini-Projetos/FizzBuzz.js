/* Fazer uma função que age da seguinte forma:

Divisível por 3 => Fizz
Divisível por 5 => Buzz
Divisível por 3 e 5 => FizzBuzz
Não divisível por 3 ou 5 => entrada
Não é um número => 'Não é um número'

*/

const resultado = FizzBuzz(30);
console.log(resultado);

function FizzBuzz (ent)
{
    if(typeof ent !== 'number')
        return "Não é um número";
    if(ent % 3 === 0 && ent % 5 === 0)
        return "FizzBuzz";
    if(ent % 3 === 0)
        return "Fizz";
    if(ent % 5 === 0)
        return "Buzz";
    return ent;
}