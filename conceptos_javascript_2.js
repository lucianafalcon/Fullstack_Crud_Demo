/********************************************************************************* 
Definiciones:
Funciones Constructoras y Almacenamiento: clases - json - local y sesion storage
Funciones de orden superior
DOM y Eventos en Javascript
*********************************************************************************/

/********************************************************************************/
// Función Constructora

// Clases:
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

let usuarios = [usuario, usuario2, usuario3];
console.log(usuarios);

usuario2.saludar("este es un parametro");

//--------------------------------------------------
// JSON → formato → "un tipo de dato mas"

// osea json es un formato que comunica el frontend con un codigo externo (por ejemplo: una base de datos, el back, etc.)
//Recupero info de un formulario html, para que el admin registre nuevos productos
// una foto
// el nombre
// precio, etc ...

// Opción 1 - mando los datos del front al back
let producto = {
  image: "https://laimagen.com",
  nombre: "telefono",
  precio: 100,
};
//enviar
const enviarProductoAlBack = (queInfo) => {};

enviarProductoAlBack(producto);

//--------------------------------------------------
// Opción 2 - traigo datos del back y los uso en el front
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
  JSON.parse("[]"); // true
  JSON.parse("[]"); // {}

  let parseados = JSON.parse(informacionParaParsear); // antes --> "[{}{}]" --> ahora [{}{}]
  console.log(parseados);
};

parsearJson(productosDelBack);
