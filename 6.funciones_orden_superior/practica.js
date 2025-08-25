/********************************************************************************* 
Funciones de Orden Superior: 
programación imperativa y declarativa
*********************************************************************************/

// Funciones de Orden Superior

// En JavaScript, las funciones del orden superior son funciones que pueden recibir otras
// funciones como argumentos, retornar funciones como resultado, o ambas cosas.
// Este concepto es fundamental en la programación funcional y es una característica poderosa
// de JavaScript, que permite crear código más modular, reutilizable y flexible.

// programación imperativa (en gral no se usa, se prefiere la declarativa)

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

// find
const encontrarProducto = (nombre) => {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].nombre === nombre) {
      return productos[i];
    }
  }
  return "el producto no se encontro";
};

let productoCompleto = encontrarProducto("MacBook Pro 14");
console.log(productoCompleto);

// filtrar
const filtrar = (categoria) => {
  let nuevoArray = [];

  for (let i = 0; i < productos.length; i++) {
    if (productos[i].categoria === categoria) {
      nuevoArray.push(productos[i]);
    }
  }
};

let elNuevoCuadernito = filtrar("tablet");
console.log(elNuevoCuadernito);

// map  → es generar un nuevo array a partir de uno original, de la misma longitud pero con elementos que me sirvan
const nuevoArrayModificado = () => {
  let nuevoArray = [];
  for (let i = 0; i < productos.length; i++) {
    nuevoArray.push({
      nombre: productos[i].nombre,
      precio: productos[i].precio,
      cantidadVendida: 0, //nueva propiedad agregada
    });
  }
  return nuevoArray;
};

let arrayMapeado = nuevoArrayModificado();
console.log(arrayMapeado);

//--------------------------------------------------
// programación declarativa o funcional (hace el algoritmo más simple y fácil de leer)

// función de orden superior (método):
// - por detrás hace un for
// - se ejecuta callback (es la función que se pasa como argumento a otra función)

// ejemplos de métodos:
// sort → ordena el array
// reduce → reduce a un solo valor
// every → true si TODOS cumplen
// find → devuelve el PRIMERO que cumple la condición
// filter → devuelve TODOS los que cumplen (si ninguno cumple devuelve el nuevo array vacio)
// map → transforma cada elemento (devuelve un nuevo array y de la misma longitud si o si)

// find
let productoFind = productos.find(
  (producto) => producto.nombre === "MacBook Pro 14"
);
console.log(productoFind); // el find si no encuentra devuelve undefined

// filtrar
let productosFiltrados = productos.filter(
  (producto) => producto.categoria === "tablet"
); //producto[i]
console.log(productosFiltrados);

// map
let arrayNuevoModificado = productos.map((elemento) => {
  return {
    nombre: elemento.nombre,
    precio: elemento.precio,
    cantidadVVendida: 0,
  };
});

console.log(arrayNuevoModificado);
