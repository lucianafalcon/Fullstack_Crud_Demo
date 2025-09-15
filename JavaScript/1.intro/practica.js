/********************************************************************************* 
Intro a JS: 
prompt - alert - tipos de datos primit. y valores especiales.
/********************************************************************************/

// Intro a JS

// prompt →  Simular un input
prompt("Ingresa un número");

// console →  Mostrar datos en la consola
console.log("Hola");

// alert →  Mostrar datos en un popup en el navegador
alert("Tu número es tanto");

/* SCOPE: Las variables se pueden utilizar en el ambiente que fueron credas 
o en ambientes internos a donde fueron creadas.

Scope Global: Cuando una variable se declara fuera de cualquier función o bloque,
tiene un scope global, lo que significa que es accesible desde cualquier parte del 
código después de su declaración. 

Scope Local: El scope local restringe el acceso a una variable al bloque o función 
donde se declara. Existen dos tipos principales:
1. Scope de Función: Variables declaradas dentro de una función no son accesibles fuera de ella.
2. Scope de Bloque: Introducido con let y const en ES6, permite limitar el scope a un bloque específico,
como en ciclos o condicionales.*/

//---------------------------------------------------
// Variables →  Estructura: iniciador nombre = valor;

// JavaScript utiliza variables para almacenar datos que pueden variar durante la
// ejecución del programa. Las variables se declaran con las palabras clave let o const.

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
