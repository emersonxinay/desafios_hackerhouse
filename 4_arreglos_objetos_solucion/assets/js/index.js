import propiedadesVenta from "./propiedades_venta.js";
import propiedadesAlquiler from "./propiedades_alquiler.js";

const mostrarPropiedades = (propiedades, containerId) => {
  // se puede usar querySelector de esta forma 
  const container = document.querySelector(`#${containerId}`);
  // o tambien getElementById
  // const container = document.getElementById(containerId);


  const propiedadesPorMostrar = [];
  // para mostrar la cantidad de datos tienes que cambiar a 3 
  for (const valor in propiedades) {
    if (valor < 2) {
      // se agrega por cada ciclo un dato a la variable de arreglo vacio propiedadesPorMostrar
      propiedadesPorMostrar.push(propiedades[valor]);
    }
  }

  // recorremos todo el arreglo y mostrarlo en html en base a una plantilla
  propiedadesPorMostrar.forEach((propiedad) => {
    container.innerHTML += `
    <div class="col-md-4 mb-4">
    <div class="card">
    <img
      src="${propiedad.src}"
      class="card-img-top"
      alt="Imagen de la propiedad"
    />
    <div class="card-body">
      <h5 class="card-title">${propiedad.title}</h5>
      <p class="card-text">${propiedad.description}</p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedad.address}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${propiedad.bedrooms} Habitaciones |
        <i class="fas fa-bath"></i> ${propiedad.bathrooms} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${propiedad.price}</p>
      <p class="${propiedad.smoking ? "text-success" : "text-danger"}">
            <i class="fas ${propiedad.smoking ? "fa-smoking" : "fa-smoking-ban"
      }"></i>
            ${propiedad.smoking
        ? "Está permitido fumar"
        : "No se permite fumar"
      }
          </p>
          <p class="${propiedad.pets ? "text-success" : "text-danger"}">
            <i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"}"></i>
            ${propiedad.pets
        ? "Mascotas permitidas"
        : "No se permiten mascotas"
      }
          </p>
    </div>
  </div>
</div>
    `;

  });
};

// invocamos a la función con sus respectivos parametros 
//         1: trae todo los datos del arreglo y  2: busca el id que esta en el html
mostrarPropiedades(propiedadesVenta, "propiedadesVentaContainer");

// ahora invoca para las propiedades de alquiler y se pueda mostrar en la web 



