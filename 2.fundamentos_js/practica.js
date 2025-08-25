/********************************************************************************* 
Fundamentos de JS: operaciones matematicas - comparaciones - condicionales.
*********************************************************************************/

/********************************************************************************/
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
