function adicionarComentario() {
    let inputComentario = document.getElementsByName('novo-comentario');
    
    let textoDigitado = inputComentario[0].value;

    // console.log(textoDigitado)

    let novosComentarios = document.getElementById('novos-comentarios');


    // Pegue o conteúdo atual da div "novosComentarios" e adicione esse novo parágrafo no final:
    novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado} </p>`
}