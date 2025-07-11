/* let valorBoleto = 100

console.log(valorBoleto)
// console.log(valorBolet) */





let inputTelefone = document.getElementById('telefone');

console.log(inputTelefone)
inputTelefone.disabled = true;
// o disabled impedi que o usuário digite neste input

function habilitarTelefone() {
    let inputTelefone = document.getElementById('telefone')
    inputTelefone.disabled = false;

}