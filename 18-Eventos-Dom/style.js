let selectDeEstado = document.querySelector("select[name='estado']");

selectDeEstado.addEventListener('change', function() {
        alert('mudou o select')
    }
)

console.log(selectDeEstado)



// OUTRA MANEIRA CURTA DE FAZER:
/*
document
.querySelector("select[name='estado']")
.addEventListener('change', function (event) {
        console.log(event.target.value)
    }
); */