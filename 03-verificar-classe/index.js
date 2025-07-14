function trocarDeCor() {
    let quadradoPreto = document.getElementById('preto')
    
 if (quadradoPreto.classList.contains('azul')) {
    quadradoPreto.classList.remove('azul')
 } else {
    quadradoPreto.classList.add('azul')
    alert("Parabénsss, Você mudou a cor!");
}
};