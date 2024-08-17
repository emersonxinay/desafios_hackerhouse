// Aqui se importa todo los datos de propiedadesAlquiler, ya que alli esta el arreglo con objetos 
import propiedadesAlquiler from "./propiedades_alquiler.js";

// creamos una función flecha para mostrar todo con alquiler
const mostrarPropiedadesAlquiler = () => {
  // ubicamos la etiqueta a donde viajara desde el js
  const container = document.querySelector("#soloPropiedadesAlquiler");

  // con foreach vamos a recorrer todo el arreglo de alquiler y aqui se crea la 
  propiedadesAlquiler.forEach((propiedad) => {
    // creamos la plantilla para que se inserte en el html en la etiqueta #soloPropiedadesAlquiler para cada objeto
    container.innerHTML += `
    <div class="col-md-4 mb-4">
    <div class="card">
    <!-- completar para las imagenes 🆘  -->
    <img
      src=" "
      class="card-img-top"
      alt="Imagen de la propiedad"
    />
    <div class="card-body">
      <h5 class="card-title">${propiedad.title}</h5>
       <!-- completar para la descripción 🆘  -->
      <p class="card-text"> </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedad.address}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${propiedad.bedrooms} Habitaciones |
        <!-- completar para la bathrooms -baños 🆘  -->
        <i class="fas fa-bath"></i>   Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${propiedad.price}</p>
      <p class="${propiedad.smoking ? "text-success" : "text-danger"}">
            <i class="fas ${propiedad.smoking ? "fa-smoking" : "fa-smoking-ban"
      }"></i>
            ${propiedad.smoking ? "Está permitido fumar" : "No se permite fumar"
      }
          </p>
          <!-- completar para los pets - mascotas  🆘  -->
          <p class="">
            <i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"}"></i>
            ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"
      }
          </p>
    </div>
  </div>
</div>
</div>
    `;

  });
};


// Luego llamamos a la función para mostrar las propiedades alquiler
mostrarPropiedadesAlquiler();
