/********************************************************************************* 
Manejo del asincronismo y errores:
Async/Await - Promesas.

Métodos HTTP:
Create  → POST
Read →  GET
Update → PUT (completo) / PATCH (parcial)
Delete → DELETE

fetch() (o cualquier otra petición HTTP como axios, XMLHttpRequest, etc.): 
esas solicitudes se pueden ver en la pestaña Network/Red del navegador con el filtro 
Fetch/XHR clickeado (DevTools → pestaña Network).
*********************************************************************************/

// Fetch

// trabaja con funciones asíncronas, tengo 2 opciones para eso:
// - async/await → forma más moderna y legible de trabajar con promesas
// - promesas → sintaxis más antigua (con then/catch)

// API: es la fuente de datos o servicio (ejemplo: una API de clima, de películas, etc.).

// Fetch: es la herramienta de JS que usás para conectarte a esa API y traer o mandar datos.

//--------------------------------------------------
// Async/Await

// paso 1) definimos funcion asincrona
// paso 2) disparar una petición http por defecto hace un GET
// paso 3) esperamos la info, a dicha info le aplicamos el método json

// paso 1) definimos funcion asincrona
const obtenerPosteos = async () => {
  let contenedor = document.getElementById("container");
  console.log(contenedor);

  // try...catch: parecido a un if-else, pero en lugar de evaluar condiciones,
  // se usa para atrapar errores que ocurren durante la ejecución del código.
  try {
    // paso 2) disparar una petición http por defecto hace un GET
    const posteos = await fetch("https://jsonplaceholder.typicode.com/posts");
    // paso 3) esperamos la info, a dicha info le aplicamos el método json
    const posteosListos = await posteos.json();
    console.log(posteosListos);

    let htmlPosteos = "";
    posteosListos.forEach((posteo) => {
      htmlPosteos += `<h2>${posteo.title}</h2>`;
    });

    contenedor.innerHTML = htmlPosteos;
  } catch (error) {
    console.log(error);
    contenedor.innerHTML = "<div><h2>Algo salió mal<i/h2></div>";
  }
};

obtenerPosteos();

//--------------------------------------------------
// Pomesas

const obtenerPosteos2 = () => {
  let contenedor = document.getElementById("container");
  const posteos = fetch("https://jsonplaceholder.typicode.com/posts");
  posteos
    .then((respuesta) => respuesta.json())
    .then((posteosListos) => {
      let htmlPosteos = "";
      posteosListos.forEach((posteo) => {
        htmlPosteos += `<h2>${posteo.title}</h2>`;
      });

      contenedor.innerHTML = htmlPosteos;
    })
    .catch((error) => {
      console.log(error);
      contenedor.innerHTML = "<div><h2>Algo salió mal</h2></dv>";
    });
};

obtenerPosteos2();

//--------------------------------------------------
// POST

// POST --> creación dentro del patrón CRUD

const crearPosteo = async () => {
  // harcodeado
  try {
    let nuevoPosteo = {
      title: "pepe",
      body: "este es el mejor post",
      uderId: 1,
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(nuevoPosteo),
    });
    const responseParseada = await response.json();
    console.log(responseParseada);
    alert("producto creado con éxito");
  } catch (error) {
    // El catch solo se ejecuta en estos casos:
    // No hay conexión a internet, el dominio no existe (no la ruta), el navegador bloquea la
    // petición (CORS), o el código dentro de tu try explota (ej: accedés a una variable inexistente).
    alert("no se pudo crear el producto");
  }
};

let btnCrear = document.getElementById("btn");
btnCrear.addEventListener("click", crearPosteo);

//--------------------------------------------------
// PUT

// Reemplaza todo el recurso en el servidor con el nuevo objeto enviado.

// Pasos generales:

// 1) Definir el endpoint (URL). Esto indica qué recurso quieres actualizar
// Ejemplo: /posts/5 → estamos apuntando al post con ID 5.

// 2) Definir los datos a actualizar e indicas qué campos quieres modificar.
// Ejemplo: title, body, author, etc.

// 3) Enviar la petición PUT
// La petición suele incluir:
// - URL del recurso
// - Header: por ejemplo Content-Type: application/json
// - Body: los datos actualizados

const actualizarPosteo = async () => {
  try {
    let nuevoPosteo = {
      // lo que quiero actualizar: title, body, etc
      title: "juan", // como es una api, no cambia realmente los datos en el servidor --> por eso no veo los cambios en red-> vista previa
    };

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/3", // el endpoint que se quiere actualizar
      {
        method: "PUT",
        body: JSON.stringify(nuevoPosteo),
      }
    );
    const responseParseada = await response.json();
    console.log(responseParseada);
    // alert("producto creado con éxito");
  } catch (error) {
    // alert("no se pudo crear el producto");
  }
};

let btnActualizar = document.getElementById("btnUpdate");
btnActualizar.addEventListener("click", actualizarPosteo);

//--------------------------------------------------
// PATCH

// Actualiza parcialmente el recurso. Solo cambia los campos que envías.

const actualizarPosteo2 = async () => {
  try {
    let nuevoPosteo = {
      // lo que quiero actualizar: title, body, etc
      title: "juan", // como es una api, no cambia realmente los datos en el servidor --> por eso no veo los cambios en red-> vista previa
    };

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/3", // el endpoint que se quiere actualizar
      {
        method: "PATCH",
        body: JSON.stringify(nuevoPosteo),
      }
    );
    const responseParseada = await response.json();
    console.log(responseParseada);
    // alert("producto creado con éxito");
  } catch (error) {
    // alert("no se pudo crear el producto");
  }
};

btnActualizar.addEventListener("click", actualizarPosteo2);

//--------------------------------------------------
// DELETE

// No lleva body

const actualizarPosteo3 = async () => {
  try {
    let nuevoPosteo = {
      // lo que quiero actualizar: title, body, etc
      title: "juan", // como es una api, no cambia realmente los datos en el servidor --> por eso no veo los cambios en red-> vista previa
    };

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/3", // el endpoint que se quiere actualizar
      {
        method: "DELETE",
        body: JSON.stringify(nuevoPosteo),
      }
    );
    const responseParseada = await response.json();
    console.log(responseParseada);
    // alert("producto creado con éxito");
  } catch (error) {
    // alert("no se pudo crear el producto");
  }
};

let btnBorrar = document.getElementById("btnDelete");
btnActualizar.addEventListener("click", actualizarPosteo3);

//--------------------------------------------------
// GET

// fetch("https://jsonplaceholder.typicode.com/posts")
// Ya estás haciendo un GET por defecto.
// No hace falta poner method: "GET" a menos que quieras ser explícito.

// const obtenerPosteos = async () => { ... }
// const obtenerPosteos2 = () => { ... }
//Estas funciones hacen GET, pero solo muestran los posts en tu contenedor.
