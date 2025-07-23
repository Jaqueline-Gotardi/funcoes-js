const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const slides = document.querySelectorAll(".slide");
let slideAtual = 0;

// Função para mostrar o slide atual e esconder os outros
function mostrarSlide(index) {
  slides.forEach((slide) => slide.classList.remove("selecionado"));
  slides[index].classList.add("selecionado");

  // Desativa a seta esquerda se estiver no primeiro slide
  btnVoltar.classList.toggle("seta-desativada", index === 0);

  // Desativa a seta direita se estiver no último slide
  btnAvancar.classList.toggle("seta-desativada", index === slides.length - 1);
}

// Botão de avançar
btnAvancar.addEventListener("click", () => {
  if (slideAtual < slides.length - 1) {
    slideAtual++;
    mostrarSlide(slideAtual);
  }
});

// Botão de voltar
btnVoltar.addEventListener("click", () => {
  if (slideAtual > 0) {
    slideAtual--;
    mostrarSlide(slideAtual);
  }
});

// Mostrar o primeiro slide ao carregar a página
mostrarSlide(slideAtual);