/* Constructor Function (exercício)

Criar um objeto postagem, com:

titulo
mensagem
autor
visualizações
array de comentarios
estaAoVivo

*/

function Postagem (titulo, mensagem, autor)
{
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem1 = new Postagem (
    'Título aqui',
    'Alguma mensagem aqui',
    'Nathalia',
)

console.log(postagem1);