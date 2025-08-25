/********************************************************************************* 
Funciones: 
declaradas, expresadas y flechas.
*********************************************************************************/

// Funciones

// Sirve para reutilizar código. Se declara una vez y se ejecuta cuando se la llama.
// Existen 3 tipos en js: función flecha, función anónima y función declarada.

//  Función flecha (arrow function) - opción 1:
//  Cuando tengo solo una instrucción, no hacen falta las llaves {}

//  Función flecha (arrow function) - opción 2:
//  uando tengo más de una instrucción, uso llaves {} y debo usar return si quiero devolver un valor

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
