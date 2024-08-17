const divA = document.querySelector("#a")
const divB = document.querySelector("#b")
// completar las variables para el C y D

const tecleando = document.querySelector("#teclado");

// funcion para que cambie de color de fondo
const cambiarColor = (event) => {
  event.target.style.backgroundColor = "black";
};
// hacemos el llamado seleccionando la etiqueta a donde hara la acción
divA.addEventListener("click", cambiarColor)
divB.addEventListener("click", cambiarColor)
//completar para divC y divD


// función para crear etiquetas

function crear_etiqueta(color) {
  const newDiv = document.createElement("footer");
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.style.margin = "50px";
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv);
}


// para que escuche el teclado  
let color = ""
document.addEventListener('keydown', function (event) {
  if (event.key === 'a') {
    tecleando.style.backgroundColor = "pink";
  }
  // ----- descomentar el siguiente codigo y completa
  // else if (event.key === 's') {
  //   //completar para el anaranjado

  // }
  else if (event.key === 'd') {
    tecleando.style.backgroundColor = "skyblue";
  }
  // a partir de aqui se crearan las etiquetas en base a la función que creamos  tecla que presionas
  else if (event.key === 'q') {
    crear_etiqueta("purple");
  }

  // ----- descomentar el siguiente codigo y completa
  // else if (event.key === 'w') {
  //   // completar para crear la etiqueta de color gris

  // }
  else if (event.key === 'e') {
    crear_etiqueta("brown");
  }
});

