/* Postagem de Blog

Criar um objeto de postagem de blog que deverá conter as propriedades:

título
mensagem
autor
visualizações
comentarios
    (autor, mensagem)
estaAoVivo

*/

let postagem = {
    titulo : 'Titulo aqui', 
    mensagem : 'Aqui deveria ter uma mensagem super bacana, finja que existe!',
    autor : 'Nathália',
    visualizacoes : 10000000,
    comentarios : [
        {
            autor : 'konath',
            mensagem : 'mensagem legal!'
        },
        {
            autor : 'koli',
            mensagem : 'concordo com a konath'
        }
    ],
    estaAoVivo : true
}

console.log(postagem);