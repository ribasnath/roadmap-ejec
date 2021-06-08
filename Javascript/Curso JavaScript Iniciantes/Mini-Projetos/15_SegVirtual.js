function verificar()
{
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosNathalia = ['Grazi', 'Luciano', 'Albert', 'Charlotte']

    if(ConvidadosNathalia.includes(NomeConvidado))
    {
        document.getElementById('verificando').innerText = 'Você pode entrar!'
    } else {
        document.getElementById('verificando').innerText = 'Você não pode entrar!'
    }
}