/* Criar um verificador de velocidade que faça:

velocidade máxima de até 70
a cada 5km acima do limite, você ganha um ponto
math.floor()
caso pontos > 12 => carteira suspensa

*/

verificarVel(76);

function verificarVel(velocidade)
{
    let pontos;
    let velMax = 70;

    if(velocidade <= velMax)
        console.log("Ok");
    else
    {
        pontos = (velocidade - velMax) / 5;
        if(pontos > 12)
            console.log("Carteira suspensa!");
        else
            console.log(Math.floor(pontos));
    }
}