let macronutrientes = {
  proteinas: 0,
  carbohidratos: 0,
  grasas: 0,
};

console.log(macronutrientes);

//--------------------------------
const sumarMacronutrientes = (proteinas, carbohidratos, grasa) => {
  totalProteinas += proteinas;
  totalCarbohidratos += carbohidratos;
  totalGrasas += grasa;
};

//--------------------------------
let nombre = prompt("Ingresá tu nombre:");

let continuar = true;

while (continuar) {
  let proteinas = prompt("Ingresá la cantidad de proteínas (g):");
  let carbohidratos = prompt("Ingresá la cantidad de carbohidratos (g):");
  let grasa = prompt("Ingresá cantidad la de grasa (g):");

  console.log(`Proteínas: ${proteinas}g`);
  console.log(`Carbohidratos: ${carbohidratos}g`);
  console.log(`Grasa: ${grasa}g`);

  sumarMacronutrientes(proteinas, carbohidratos, grasa);

  let respuesta = prompt("agregar mas datos?");
  if (respuesta.toLowerCase() !== "no") {
    continuar = false;
    alert("Proteina total: ");
    alert("Carbohidrato total:  ");
    alert("Grasa total:  ");
  }
}
