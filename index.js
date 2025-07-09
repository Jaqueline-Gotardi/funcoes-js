/*
function nomeDaFuncao(){
<bloco de execução>
}

nomeDaFuncao()
*/

/*
function nomeDaFuncao(parametro1, parametro2){
    <bloco de execução>
}
nomeDaFuncao(parametro1, parametro2)
*/

function incentivarQuester(nomeQuest = 'Quest'){
    alert('Muito bem ' + nomeQuest + ',você chegou ao JS, continue assim!')
}
incentivarQuester('Jaqueline') 


/* function soma(numero1, numero2){
    return numero1 + numero2
}

let resultadoDaSoma = soma(1, 3)
console.log(resultadoDaSoma) //4

resultadoDaSoma = soma(resultadoDaSoma, 10)
console.log(resultadoDaSoma)//14 */


// PRATIQUEI MAIS FUNÇÕES:
function boasVindas( ) {
console.log('Bem-vindo(a) ao nosso site!');
}

function mostrarIdade(idade) {
    console.log('Você tem ' + idade + ' anos.');
}

function calcularDesconto(preco, desconto){
    return preco - desconto;
    console.log (' O preço com desconto é: ' + calcularDesconto(100, 20));
}

function verificarMaioridade(idade) {
    if (idade >= 18) {
        console.log('Maior de idade');
    } else {
        console.log('Menor de idade');
    }
}

function soma(a, b) {
    return a + b;
}

function mostrarResultado() {
    console.log('O resultado da soma é: ' + soma(4, 6));
}