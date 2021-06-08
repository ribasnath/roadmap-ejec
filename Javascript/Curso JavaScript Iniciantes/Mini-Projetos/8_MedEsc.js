/* Criar um código que obtém a média a partir de um array
e retorna as notas no seguinte formato:

0-59 : F
60-69 : D
70-79 : C
80-89 : B
90-100 : A

*/

const array = [90, 80, 80];

console.log(MedEsc(array));

function MedEsc(notas)
{
    let som = 0;
    let med = 0;

    for(let index of notas)
    {
        som += index;
    }

    med = som / notas.length;

    if (med <= 59)
        return "F";
    if (med >= 60 && med <= 69)
        return "D";
    if (med >= 70 && med <= 79)
        return "C";
    if (med >= 80 && med <= 89)
        return "B";
    if (med >= 90 && med <= 100)
        return "A";
}

/*
ou...

[...]

function MedEsc(notas)
{
    const med = calculaMed(notas);

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A';
}

function calculaMed(array)
{
    let som = 0;

    for (let valor of array)
    {
        soma += valor;
    }

    return soma / (array.length);
}

*/