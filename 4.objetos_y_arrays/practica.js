/********************************************************************************* 
Arrays y Objetos: 
método push, includes e indexOf - array con ciclo for
*********************************************************************************/

// Objetos vs Arrays

// Tipos de datos primitivos:
// string - number - boolean - null - undefined - NaN

// Objetos → analogía: "diccionarios"
// Agrupan propiedades (clave: valor) y métodos (funciones).
// 1. Propiedades:
//  -  se definen entre llaves {}.
//  -  se definen en secuencia  clave : valor
// 2. Métodos:
//  -  se definen entre llaves {}.
//  - siempre con la palabra function (osea dentro de un objeto, se utiliza la palara function para definir un método).

// Arrays → analogía: "colección" o "lista ordenada"
// Agrupan elementos (del mismo o distinto tipo).
// Se definen entre corchetes [] y los elementos están separados por comas.

//--------------------------------------------------
// Objetos:
let producto = {
  // OBJETO completo
  // clave: valor
  nombre: "telefono", // ← propiedad
  precio: 200,
  esImportado: true,
  stock: 15,
  direccion: { calle: "italia", numero: "225" }, // corregido: "direccon" → "direccion" y "numero" → "numero"
};

console.log(typeof producto); // Imprime object
console.log(typeof producto.esImportado); // Imprime true

// si la propiedad stock hubiera existdo en el objeto producto, lo crea y devolveria NaN (porque: producto.stock = undefined - 1; // → NaN)
const descontarStock = () => {
  producto.stock = producto.stock - 1;
};

descontarStock();
console.log(producto.stock);

// Métodos:
let usuario1 = {
  nombre: "pepe",
  email: "pepe@gmail.com",
  password: "123456",
  edad: 32,
  saludar: function (x) {
    console.log("Hola soy ${this.nombre}"); //se usa "this." (no usar en nombre del objeto porque sino no lo podes reutilizar) para acceder a la propiedad del objeto
    console.log(x);
    return true;
  },
};

let resultado1 = usuario1.saludar(523);
console.log(resultado);

//--------------------------------------------------
// Array

// array simple - ejemplo 1
let numerosDeLaSuerte = [15, 16, 17];
console.log(numerosDeLaSuerte); // imprime [15, 16, 17]

// array que contiene objetos: - ejemplo 2
let productos = [
  { nombre: "teléfono", precio: 200 }, // elemento 1
  { nombre: "computadora", precio: 200 }, // elemento 2
  { nombre: "zapatilla", precio: 200 }, // elemento 3
];

//--------------------------------------------------
// Metodo push:
// es un método(función) y sirve para agregar algo al final del array

//ejemplo  1 (array simple)
numerosDeLaSuerte.push(80, 90);
console.log(numerosDeLaSuerte); // imprime [15, 16, 17, 80, 90]

//ejemplo 2 (array de un objeto)
productos.push({ nombre: "pepe", precio: "200" });
console.log(productos);

//--------------------------------------------------
// Método includes:
// sirve para saber que datos tengo en el array
// Devuelve true o false

console.log(numerosDeLaSuerte.includes(32)); //devuelve false

//--------------------------------------------------
// Método indexOf:
// sirve para saber en qué posición está un dato en el array
// Devuelve el índice (posición) si lo encuentra y -1 si no

console.log(numerosDeLaSuerte.indexOf(16)); // Devuelve 1 (porque está en la posición 1)
console.log(numerosDeLaSuerte.indexOf(99)); // Devuelve -1 (porque no está)

//--------------------------------------------------
// Array usando el ciclo for:
// sirve para iterar

//ejemplo 2 (array simple)
let palabras = ["pepe", "juan", "carmen", "maria"];

for (let i = 0; i < palabras.length; i++) {
  console.log(palabras[i]); //devuelve los nombres de palabras en columnas
}

//ejemplo 2 (array de un objeto)
const sumarstock = () => {
  for (let i = 0; i < productos.length; i++) {
    // length = cantidad de elementos que hay en el array.
    console.log(productos[i].nombre);
  }
};
