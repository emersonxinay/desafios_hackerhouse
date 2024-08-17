
function verificar() {
  n1 = Number(document.querySelector('#p-1').value)
  n2 = Number(document.querySelector('#p-2').value)
  // completar la variable  para el input3
  suma = n1 + n2 + n3
  console.log(suma);
  element = document.querySelector('#result')
  if (suma <= 10) {
    // agregar el mensaje que se va insertar en el html 

  }
  else {
    element.innerHTML = `Llevas ${suma} demasiados stickers`
  }
}