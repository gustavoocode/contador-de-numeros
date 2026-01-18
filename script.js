
var contador = 0;

var valor = document.getElementById("valor");
var aumentar = document.getElementById("aumentar");
var aumentarDez = document.getElementById("aumentarDez");
var diminuir = document.getElementById("diminuir");
var zerar = document.getElementById("zerar");

aumentar.addEventListener("click", function () {
  contador++;
  valor.innerText = contador;
  atualizarVisual()
});

aumentar10.addEventListener("click", function () {
  contador += 10;
  valor.innerText = contador
  atualizarVisual()
})

diminuir.addEventListener("click", function () {
  contador--;
  valor.innerText = contador;
  atualizarVisual()

})
//teste
diminuir10.addEventListener("click", function () {
  contador -= 10;
  valor.innerText = contador
  atualizarVisual()
})


zerar.addEventListener("click", function () {
  contador = 0;
  valor.innerText = contador;
  atualizarVisual()
})

function atualizarVisual() {
  if (contador < 0) {
    valor.style.color = "#FB7185";
    valor.style.textShadow = "0 0 20px #FB7185";
  }
  else if (contador > 0) {
    valor.style.color = "#4ADE80";
    valor.style.textShadow = "0 0 20px #4ADE80";
  }
  else {
    valor.style.color = "#22D3EE";
    valor.style.textShadow = "0 0 20px #22D3EE";
  }
}

const toggleTheme = document.getElementById("toggleTheme");


if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggleTheme.innerText = "🌞";
}

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");
  toggleTheme.innerText = isLight ? "🌞" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});


