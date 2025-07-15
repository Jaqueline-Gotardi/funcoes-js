/***Descrição da tarefa:**  Nessa tarefa, você deve criar um ou mais inputs na tela. Ao digitar qualquer texto em um desses inputs, a sua borda deverá ficar com a cor verde. Caso o input estiver vazio, a cor da borda deverá voltar ao normal. */ 


let caixa = document.getElementById('verde')

caixa.addEventListener('input', function() {
    if (caixa.value !== "") {
    caixa.classList.add('caixaVerde')
    } else {
        caixa.classList.remove('caixaVerde')
    }
});