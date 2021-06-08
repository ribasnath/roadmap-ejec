/* Criar um método paraler propriedades de um objeto
e exibir somente as propriedades do tipo string */

const livro = 
{
    titulo : "Momo",
    ano : 1973,
    autor : "Michael Ende"
}

exibir(livro);

function exibir(obj)
{
    for(elem in obj)
    {
        if(typeof obj[elem] === 'string')
            console.log(elem, obj[elem]);
    }
}