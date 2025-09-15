/********************************************************************************* 
DOM y Eventos en Javascript:
acceso al dom - modificación de nodos - plantillas lineales e interactividad - 
enlaces y rutas
*********************************************************************************/

// Acceso a los elementos html desde js

// Los métodos para acceder a los elementos (nodos) html desde js mas usados son:
// - getElementById  → accede a partir de su atributo id
// - querySelector → selecciona un nodo que se requiere (osea devuelve la primer coincidencia): por id, etiqueta o clase
// - querySelectorAll → devuelve todas las coincidencias

// getElementById:
let titulo = document.getElementById("title");
console.log(titulo);

// querySelector por id:
let contenedorDeProductos = document.querySelector("#title");
console.log(contenedorDeProductos);

// querySelector por etiqueta:
let contenedorDeProductos2 = document.querySelector("div");
console.log(contenedorDeProductos2);

// querySelector por clase:
let contenedorDeProductos3 = document.querySelector(".productos");
console.log(contenedorDeProductos3);

//querySelectorAll
let categorias = document.querySelectorAll(".categoria"); //te devuelve un array con los elementos
console.log(categorias);

//--------------------------------------------------
// Manipulación de los elementos osea las clases CSS (estilos) del HTML desde js

// titulo.style.color = "red";

titulo.textContent = "Hola este es el nuevo texto";

// agrega adentro de la etiquieta lo que quiera
// como uso el div con class, entonces uso el contenedorDeProductos3 (porque a éste lo traje al js con class)
contenedorDeProductos3.innerHTML = ` 
    <div class="producto">
        <h2>Un producto</h2>
    </div>
    <div class="producto">
        <h2>Un producto</h2>
    </div>
`;

// -----
// style

// nodo + .style + propiedadCSS = valor

// - nodo → es el elemento HTML que trajiste con getElementById, querySelector, etc. Ej: contenedorDeProductos3.
// - .style → accede al objeto de estilos en línea del nodo (es como si le pusieras style="..." directo en el HTML).
// - propiedadCSS → la propiedad que quieras cambiar (color, backgroundColor, fontSize, etc.).
// - valor → lo que le quieras asignar (un string). Ej: "red", "20px", "#333", "center", etc.

contenedorDeProductos3.style.color = "red";
contenedorDeProductos3.style.border = "2px solid red";
// -----

// como colorear (un boton por ejemplo)
titulo.classList.add("dark");

// como quitar el color
titulo.classList.remove("dark");

// como recuperar un elemento de html en js:
let btnAgregarClase = document.getElementById("btn-agregar-clase");
console.log(btnAgregarClase);

// -----
// .addEventListener

// .addEventListener("click","(evento)=>{función}")

// alguno de los eventos mas usados:
// - click -> evento al hacer click con el mouse
// - drag -> es para arrastrar

let btnAgregarClase2 = document.getElementById("btn-agregar-clase2");
btnAgregarClase2.addEventListener("click", () => {
  titulo.classList.add("dark");
  contenedorDeProductos3.style.border = "2px solid blue";
});

let btnQuitarClase2 = document.getElementById("btn-quitar-clase2");
btnQuitarClase2.addEventListener("click", () => {
  titulo.classList.remove("dark");
  contenedorDeProductos3.style.border = "none"; // quita el borde
});
// -----
