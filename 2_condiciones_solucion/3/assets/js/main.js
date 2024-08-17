const btn = document.querySelector('button')
const mensaje = document.querySelector(".mensaje")

btn.addEventListener("click", () => {
  const [{ value: a }, { value: b }, { value: c }] = document.querySelectorAll("select")
  const passowrd = a + b + c
  if (passowrd == "911") {
    mensaje.innerHTML = "Password 1 correcto"
    mensaje.style.backgroundColor = "blue"
    mensaje.style.color = "white"
    mensaje.style.fontSize = "3em"
  }

  //---- falta completar la comparación si en caso es 714- descomenta el siguiente codigo y completa 
  // else if () {
  //   mensaje.innerHTML = "Password 2 correcto"
  // }
  else {
    mensaje.innerHTML = "Password incorrecto"
  }
})