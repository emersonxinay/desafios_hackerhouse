
import propiedadesVenta from "./propiedades_venta.js";

const mostrarPropiedadesVenta = () => {
  const container = document.getElementById("soloPropiedadesVenta");

  propiedadesVenta.forEach((propiedad) => {
    // otra forma  de insertar nuevas etiquetas con createElement y poniendo nombre de clase ClassName 
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    // la plantillas que ira al html
    card.innerHTML = `
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
            ${propiedad.smoking ? "Está permitido fumar" : "No se permite fumar"
      }
          </p>
          <p class="${propiedad.pets ? "text-success" : "text-danger"}">
            <i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"}"></i>
            ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"
      }
          </p>
    </div>
  </div>
</div>
    `;
    // aqui se agrega el elemento al html con el appendChild
    container.appendChild(card);
  });
};

mostrarPropiedadesVenta();
