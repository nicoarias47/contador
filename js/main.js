const btnMas = document.querySelector(".btn-danger");
const btnMenos = document.querySelector(".btn-info");
const conter = document.querySelector("#conter");

let total = 0;

function sumar() {
  btnMas.addEventListener("click", () => {
    total++;
    conter.textContent = total;
  });
}

function restar() {
  btnMenos.addEventListener("click", () => {
    total--;
    conter.textContent = total;
  });
}

sumar();
restar();
