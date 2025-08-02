/************************************************************************** 
Definiciones:
Intro a JS: prompt - alert - tipos de datos primit. y valores especiales.
Fundamentos de JS: operaciones matematicas - comparaciones - condicionales.
Funciones: declaradas, expresadas y flechas.
Arrays y objetos: 
**************************************************************************/

// prompt →  Simular un input
prompt("Ingresa un número");

// console →  Mostrar datos en la consola
console.log("Hola");

// alert →  Mostrar datos en un popup en el navegador
alert("Tu número es tanto");

/* SCOPE: Las variables se pueden utilizar en el mbiente que fueron credas 
o en ambientes internos a donde fueron creadas */

//---------------------------------------------------
// Variables →  Estructura: iniciador nombre = valor;

let emaildeusuario = "ejemplo@gmail.com";
console.log(emaildeusuario);

const nombre = "Luciana";
console.log(nombre);

let nombrePrompt = prompt("ingresa tu nombre");
console.log(nombrePrompt);

let numero = prompt("ingrese numero");
console.log(numero);
console.log(typeof numero); //prompt() siempre devuelve un tipo string

let numero2 = Number(prompt("ingrese numero"));
console.log(typeof numero2); //Number() convierte el string a número,

//---------------------------------------------------
// Tipos de datos →  Cadena de texto

// Tipos de datos primitivos: strings - booleanos - null - undefined - NaN

// strings
let palabra = "casa";
let frase = 'esto es "una" oración con comillas dobles';
let frase2 = "esto es 'una' oración con comillas simples";

// numeros
let int = 12;
let float = 12.5;

// booleanos
/* verdadero = true, "Hola", {}, [], 12 
falso = false, null, undefined, NaN, 0 */
let usuarioLogueado = true;

// concatenar strings
let saludo = "Hola" + nombrePrompt + "cómo estas?";
console.log(saludo);

let saludoPro = `Hola ${nombrePrompt} cómo estas?`;
console.log(saludoPro);

//--------------------------------------------------
// valores especiales

// NaN → Not a Number
let resultado = "hola" / 2;
console.log(resultado); // NaN

// undefined →  Variable declarada pero sin valor asignado
/*let x;
console.log(x); // undefined */
function saludar() {}
console.log(saludar()); // undefined

// null -->  Ausencia intencional de valor
let usuario = null;
console.log(usuario); // null

/***************************************************************************/
// Operaciones Matemáticas

let n1 = 1;
let n2 = 2;

console.log(n1 + n2);
console.log(n1 * n2);
console.log(n2 / n2);
console.log(n1 % n2); //devuelve el resto

//---------------------------------------------------
// Comparación Simple vs Estricta

let x = 12;
let y = "12";

// simple
console.log(n1 == n2);
console.log(n1 != n2);

// estricta
console.log(x === y); // para devolver true, x e y tienen que ser  igual en nro y tipo

//--------------------------------------------------
// Condicionales

// if
let marcaAuto = "Ferrari";

if (marcaAuto === "Ferrari") {
}
console.log(marcaAuto === "Ferrari" ? "Es Ferrari" : "No es Ferrari");

// switch
let marcaAuto2 = "Toyota";
let impuesto = 0;

switch (marcaAuto2) {
  case "Ferrari":
    impuesto += 1000;
    break;
  case "Toyota":
    impuesto += 500;
    break;
  default: // Código si ningún case coincide
    impuesto += 100;
    break;
}
console.log(`Impuesto: ${impuesto}`);

/***************************************************************************/
// Funciones

// Sirve para reutilizar código. Se declara una vez y se ejecuta cuando se la llama.
// Existen 3 tipos en js: función flecha, función anónima y función declarada.

//  Función flecha (arrow function) - opción 1
//    Cuando tengo solo una instrucción, no hacen falta las llaves {}
//  Función flecha (arrow function) - opción 2
//    Cuando tengo más de una instrucción, uso llaves {} y debo usar return si quiero devolver un valor

//--------------------------------------------------
// Función flecha (arrow function) - opción 1
const sumarFlecha = (numero) => numero + 10;

let resultadoFlecha = sumarFlecha(5); // solo toma el primer argumento
console.log(resultadoFlecha); // Imprime 15

// Función flecha (arrow function) - opción 2
const sumarFlecha2 = (numero) => {
  let resultado = numero + 10;
  resultado = resultado - 10;
  return resultado;
};

let resultado2 = sumarFlecha2(5);
console.log(resultado2); // Imprime 5

// Función expresada (anónima)
const saludarDos = function (x, z) {
  console.log(x);
  return z;
};

saludarDos(5, 12);

// Función declarada
function nombreDeLaFuncion(n1 = 7, n2 = 8) {
  let suma = n1 + n2;
  // return puede ser explícito o implícito (si no hay, devuelve undefined)
  return suma;
}

let suma = nombreDeLaFuncion(5, 6); // Resultado = 11
let suma2 = nombreDeLaFuncion(undefined, 2); // Resultado = 9

console.log(suma); // Imprime 11
console.log(suma2); // Imprime 9

/***************************************************************************/
// Objetos vs Arrays

// Tipos de datos primitivos:
// string - number - boolean - null - undefined - NaN

// Objetos → analogía: "diccionarios"
// Agrupan propiedades (clave: valor) y métodos (funciones).
//   Propiedades:
//    se definen entre llaves {}.
//    se definen en secuencia  clave : valor
//   Métodos:
//    se definen entre llaves {}.
//    siempre con la palabra function (osea dentro de un objeto, se utiliza la palara function para definir un método).

// Arrays → analogía: "colección" o "lista ordenada"
// Agrupan elementos (del mismo o distinto tipo).
// Se definen entre corchetes [] y los elementos están separados por comas.

//--------------------------------------------------
// Objetos:
let producto = {
  // ← OBJETO completo
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

let resultado1 = usuario.saludar(523);
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
