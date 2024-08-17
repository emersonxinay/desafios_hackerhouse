
let buscando = document.querySelector("#ele1");
let condicionando = () => {
  // falta completar un color cuando hace click - recordando que el simbolo ? es como if y el simbolo : es como else   
  buscando.style.backgroundColor = buscando.style.backgroundColor === "blue" ? "" : "blue"
}
buscando.addEventListener("click", condicionando)



