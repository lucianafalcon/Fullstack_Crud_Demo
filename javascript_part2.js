/********************************************************************************* 
Funciones Constructoras y Almacenamiento: clases - json - local y sesion storage
Funciones de orden superior
DOM y Eventos en Javascript
*********************************************************************************/

/********************************************************************************/
// Clases

// tambien llamados constructores (antes se llamaban funciones constructoras)
// analogía: una clase es un molde (fábrica de algo, que cada vez que la uso, crea algo nuevo)

class Usuario {
  // paso 1: la construccion de las propiedades
  constructor(nombre, email, password, edad) {
    this.nombre = nombre; //se usa this.
    this.email = email;
    this.password = password;
    this.edad = edad;
  }

  //paso 3: en la creacion de los métodos
  saludar(uno, dos, tres) {
    console.log(`hola soy ${this.nombre} como estas? ${uno}`);
  }
}

// paso 2: instanciar una class
let usuario1 = new Usuario("pepe", "pepe@gmail.com", "222", "32");
let usuario2 = new Usuario("juan", "juan@gmail.com", "333", "44");
let usuario3 = new Usuario("maria", "maria@gmail.com", "444", "22");

let usuarios = [usuario1, usuario2, usuario3];
console.log(usuarios);

usuario2.saludar("este es un parametro");

//--------------------------------------------------
// JSON → formato → "un tipo de dato mas"

// osea json es un formato que comunica el frontend con un codigo externo (por ejemplo: una base de datos, el back, etc.)
//Recupero info de un formulario html, para que el admin registre nuevos productos
// una foto
// el nombre
// precio, etc ...

// Opción 1 - mando datos del front al back (por ej. cuando lleno un formulario online)
let producto = {
  image: "https://laimagen.com",
  nombre: "telefono",
  precio: 100,
};

// 1) convertir a texto JSON
const enviarProductoAlBack = (queInfo) => {
  console.log(producto);
  // transformarlo en un string
  let productoListoParaElBackend = JSON.stringify(producto);
  console.log(productoListoParaElBackend);
};

// 2)  enviar los datos parseados a back (esto lo vemos despues con fetch usando POST)

enviarProductoAlBack(producto);

//--------------------------------------------------
// Opción 2 - traigo datos del back y los uso en el front (por ej. cuando quiero ver/modificar info de una base de datos)
const productos = [
  {
    id: 1,
    nombre: "iPhone 14",
    categoria: "telefono",
    precio: 999,
    stock: 15,
    marca: "Apple",
    enOferta: true,
    calificacion: 4.8,
  },
  {
    id: 2,
    nombre: "Samsung Galaxy S23",
    categoria: "telefono",
    precio: 849,
    stock: 8,
    marca: "Samsung",
    enOferta: false,
    calificacion: 4.6,
  },
  {
    id: 3,
    nombre: "MacBook Pro 14",
    categoria: "laptop",
    precio: 2399,
    stock: 5,
    marca: "Apple",
    enOferta: false,
    calificacion: 4.9,
  },
  {
    id: 4,
    nombre: "Dell XPS 13",
    categoria: "laptop",
    precio: 1299,
    stock: 12,
    marca: "Dell",
    enOferta: true,
    calificacion: 4.4,
  },
  {
    id: 5,
    nombre: "iPad Air",
    categoria: "tablet",
    precio: 599,
    stock: 20,
    marca: "Apple",
    enOferta: false,
    calificacion: 4.7,
  },
  {
    id: 6,
    nombre: "Samsung Galaxy Tab S8",
    categoria: "tablet",
    precio: 729,
    stock: 0,
    marca: "Samsung",
    enOferta: true,
    calificacion: 4.5,
  },
  {
    id: 7,
    nombre: "AirPods Pro",
    categoria: "audio",
    precio: 249,
    stock: 25,
    marca: "Apple",
    enOferta: false,
    calificacion: 4.6,
  },
  {
    id: 8,
    nombre: "Sony WH-1000XM5",
    categoria: "audio",
    precio: 399,
    stock: 7,
    marca: "Sony",
    enOferta: true,
    calificacion: 4.8,
  },
  {
    id: 9,
    nombre: "Nintendo Switch",
    categoria: "gaming",
    precio: 299,
    stock: 18,
    marca: "Nintendo",
    enOferta: false,
    calificacion: 4.7,
  },
  {
    id: 10,
    nombre: "PlayStation 5",
    categoria: "gaming",
    precio: 499,
    stock: 3,
    marca: "Sony",
    enOferta: false,
    calificacion: 4.9,
  },
]; // ponele que esto es el back

// 1) traigo los datos del back al front
let productosDelBack = JSON.stringify(productos);

// 2) parseo los datos traídos (osea paso de strings a arrays)
const parsearJson = (informacionParaParsear) => {
  JSON.parse("[]"); // []
  JSON.parse("true"); // true
  JSON.parse("{}"); // {}

  let parseados = JSON.parse(informacionParaParsear); // antes --> "[{}{}]" --> ahora [{}{}]
  console.log(parseados);
};

parsearJson(productosDelBack);

//--------------------------------------------------
// Local y Session Storage

// - Es un almacenamiento vinculado a un origen específico (protocolo + dominio + puerto),
// independiente de la IP y separado para cada dominio
// - No se comparte entre usuarios diferentes ni navegadores distintos
// - Todo lo que guardo en el local/session storage tiene que ser del tipo stringify

// Application → ahí ves Local Storage y Session Storage con sus claves y valores
// Console → muestra lo que escribas en console.log() o mensajes de error, de JS
// Elements → ahí inspeccionas el HTML y CSS en tiempo real

// con HTmL y js --> podemos cambiar el valor
// con CSS y js --> podemos hacer estilos dinamicos en base a esa variable

let modoClaro = JSON.parse(localStorage.getItem("modoClaro") || "true");

let interruptor = document.getElementById("btn-drk");
interruptor.addEventListener("click", () => {
  modoClaro = !modoClaro;
  localStorage.setItem("modoClaro", JSON.stringify(modoClaro));
  console.log(modoClaro);
});

//--------------------------------------------------
// storage

// guardar info
localStorage.setItem("carrito", JSON.stringify(productos));
localStorage.setItem("ombreDelUsuario", "pepe");

// leer info
let productosDelCarrito = JSON.parse(localStorage.getItem("carrito"));
console.log(productosDelCarrito);

// actualizar info --> volviendo a crear
localStorage.setItem("nombreDelUsuario", "juan");

// elimina una info en particular
localStorage.removeItem("carrito");

// limpiar toda la info del storage
localStorage.clear();

/********************************************************************************/
