// Tenemos un li de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

const listaDeProductos = document.getElementById("lista-de-productos");
const input = document.querySelector('input');

function renderizarProductos(productos) {
  listaDeProductos.innerHTML = "";

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];

    const div = document.createElement("div");
    div.classList.add("producto");

    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    div.appendChild(titulo);
    div.appendChild(imagen);

    listaDeProductos.appendChild(div);
  }
}

function filtrarProductos() {
  const texto = input.value.toLowerCase();
  const productosFiltrados = productos.filter(item =>
    item.tipo.toLowerCase().includes(texto) ||
    item.color.toLowerCase().includes(texto)
  );

  renderizarProductos(productosFiltrados);
}

renderizarProductos(productos);

const botonDeFiltro = document.querySelector("button");
botonDeFiltro.addEventListener("click", filtrarProductos);
