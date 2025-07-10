function alterarCorDeFundoPrimeiroPost() {
    let primeiroPost = document.getElementsByClassName('post')[0];
    primeiroPost.style.backgroundColor = "skyblue";
}

function aumentarFonteSegundoPost() {
    let segundoPost = document.getElementsByClassName("texto-post")[1];
    segundoPost.classList.add("fonte-grande");
}

function marcarRadio(genero) {
    let generoMasculino = document.getElementById("genero-masculino");
    let generoFeminino = document.getElementById("genero-feminino");

    if (genero === "M") {
        generoMasculino.checked = true;
    } else if (genero === "F") {
        generoFeminino.checked = true;
    } 
}