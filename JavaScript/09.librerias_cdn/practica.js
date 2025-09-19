/********************************************************************************* 
Uso avanzado de Javascript:
CDN - librería AXIOS - textfield
*********************************************************************************/

// CDN jsDelivr

// CDN = Content Delivery Network (Red de Distribución de Contenido)
// Es una red de servidores de terceros que entrega archivos estáticos (JS, CSS, imágenes, fuentes, etc.).
// Ventajas:
//   - No hace falta instalar la librería con npm ni tenerla en tu proyecto local.
//   - Se cargan desde un servidor externo y ya están listas en tu HTML con <script> o <link>.
//   - Mejoran la velocidad porque el archivo se sirve desde el servidor más cercano al usuario.
//   - Muchas veces ya están en caché en el navegador, por lo que cargan instantáneamente.

// Ejemplo:
// En el html -> <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

// También se pueden “instalar” las librerías que normalmente usarías desde un CDN:
// 1- Con npm: se descarga el paquete al proyecto (node_modules) y se agrega al package.json
// Ejemplo:
//       npm install axios
//       npm install sweetalert2
//
// 2- Agregando manualmente un archivo package.json en tu proyecto y listando las dependencias
// Ejemplo package.json mínimo:
//       {
//         "name": "mi-proyecto",
//         "version": "1.0.0",
//         "dependencies": {
//           "axios": "^1.6.0",
//           "sweetalert2": "^11.0.0"
//         }
//       }
//    Luego correrías `npm install` y se descargan las librerías.

//--------------------------------------------------
// Muestra el objeto Date completo (con hora UTC incluida)
console.log(new Date());

// Fecha en formato legible (ej: "Sat Sep 13 2025")
console.log(new Date().toDateString());

// Mes (getMonth empieza en 0 → enero = 0, diciembre = 11)
console.log(new Date().getMonth() + 1); // +1 para que vaya del 1 al 12

// Hora, minutos y segundos en la hora local
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());

// Librerias para trabajar con fechas:

// - dayjs → muy liviana, API moderna, similar a Moment.js.
// import dayjs from "dayjs";
// console.log(dayjs().format("DD/MM/YYYY HH:mm:ss"));

// - moment.js → más antigua, pesada, ya está en “maintenance mode”, pero todavía se usa mucho.
// import moment from "moment";
// console.log(moment().format("DD/MM/YYYY HH:mm:ss"));

//--------------------------------------------------
// Librerías para validación de inputs en formularios

// 1- Yup → se integra mucho con React Hook Form.import * as Yup from "yup";
// 2- Zod → más moderna, buena con TypeScript.

// Supogamos que tenemos
// const miInput = ----> elemento html
// entonces quiero validar el elemento html: uso librerías

// 1- ejemplo Yup
// en la terminal: npm install yup
// import * as Yup from "yup";
// const schema = Yup.object().shape({
//   fecha: Yup.date().required("La fecha es obligatoria"),
// });

// 2- ejemplo Zod
// en la terminal: npm install zod
// import { z } from "zod";
// const schema2 = z.object({
//   fecha: z.string().datetime(), // valida formato de fecha/hora ISO
// });

//--------------------------------------------------
// AXIOS

// Librerías para hacer peticiones, no devuelve promesas
// axios → librería de red: Para hacer peticiones HTTP (fetch pero más cómodo).

// (hago dos ejemplos GET - POST)
// poner el cdn en el html: <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

// Si la libreria axios estuviera instalaa uso:
// const axios = requiere("axios")
// import axios from "axios"

console.log("axios");

// GET con fetch
const obtenerProductos = async () => {
  // uso GET de "https://fakestoreapi.com/products"
  const res = await fetch("https://fakestoreapi.com/products", {
    method: "GET",
  });
  const response = await res.json();
  console.log("get con fetch:");
  console.log(response);
};
obtenerProductos();

// GET con axios
const obtenerProductos2 = async () => {
  const res2 = await axios.get("https://fakestoreapi.com/products");
  console.log("get con axios:");
  console.log(res2.data);
};
obtenerProductos2();

//-----
// POST
// Le decís a la API que vas a crear o enviar datos, no solo leerlos como con GET
// hacer un POST, la API te devuelve en la respuesta el objeto que “creaste”
// Peeero… no lo guarda en ningún lado (no hay una base real detrás).
// Entonces, si después hacés un GET a /products, ese producto que enviaste con POST no aparece (si fuera una bd real si)

// POST con fetch para crear un nuevo producto en la api al cargar la pag
const obtenerProductos3 = async () => {
  let nuevoProducto2 = {};
  const res3 = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify({ nuevoProducto3 }), //mando un "cuerpo" vacío (un objeto convertido a JSON)
    headers: {
      Authorization: "barer-sdfsfsds", //de cabecera de autenticación
    },
  });
  const response3 = await res3.json();
  console.log("post con fetch:");
  console.log(response3);
};
obtenerProductos2();

// POST con axios en vez de fetch para crear un nuevo producto en la api al cargar la pag
const obtenerProductos4 = async () => {
  let nuevoProducto4 = {};
  const res4 = await axios.post(
    "https://fakestoreapi.com/products",
    nuevoProducto4
  );
  console.log("post con axios:");

  //console.log(res4);
  console.log(res4.data); //--> "".data" porque s la info que me interesa de res
  //otra opcion mas optimizada es hacer:
  let { data } = res4;
  console.log(data);
};
obtenerProductos4();

// ahora uso axios para crear un nuevo producto en la api pero con un boton
const crearProductos = async () => {
  let nuevoProducto = {};
  const res = await axios.post(
    "https://fakestoreapi.com/products",
    nuevoProducto
  );
  console.log(res.data);
};

const btnCrear = document.getElementById("crear");
btnCrear.addEventListener("click", () => {
  crearProductos();
  crearProducto2();
  crearProducto3();
});

// -----
// instancia - Timeout - Headers de axios

// Una instancia de Axios es un objeto Axios personalizado que creás con axios.create().
// Te permite definir configuraciones por defecto (como URL base, headers, timeout, autenticación, etc.)
// y luego usar esa instancia en todas tus llamadas a la API sin repetir esas configuraciones.

// Ventajas:
// - No repetís la baseURL ni los headers cada vez.
// - Fácil de mantener y reutilizar en proyectos grandes.
// - Podés crear varias instancias con distintas configuraciones según la API o servicio que uses.

const axiosCustom = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 100000, // timer para hacer q una petición termine
  headers: { Authorization: "barrer asdasd" }, // es el token de autorización
});

const obtenerProductos6 = async () => {
  const res6 = await axiosCustom.get("/products"); // gracias a las instancias de axios no tengo q poner la url completa
  console.log("get con instancia axios:");
  console.log(res6);
};
obtenerProductos6();

//--------------------------------------------------
// TOSTIFY

// Librerías para hacer peticiones
// tostify → librería de UX/UI: Se usa para notificaciones flotantes (tipo “toast”) que aparecen en una esquina y desaparecen al rato.

// En gral se usa para notificaciones
// (Sonner cumple un rol parecido y es mas copado: https://www.npmjs.com/package/sonner)

// Las librerías tienen:
// - demo para ver como se ve
// - instalador
// - documentación (en gral es un repo de guithub)

// Recordar asociar el toast al HTML:
// - <script type="text/javascript"src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
// - <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"/>

// Ejemplo Toastify:
const renderToast = async (text) => {
  Toastify({
    text: text,
    duration: 5000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "steelBlue",
    },
    onClick: () => {
      console.log("diste click en el toast");
    }, // Callback after click
  }).showToast();
};

const crearProducto2 = async () => {
  try {
    let nuevoProducto2 = {};
    const res2 = await axiosCustom.post("/products", nuevoProducto2);
    console.log(res2);
    renderToast("holi");
    renderToast("ciao");
  } catch (error) {
    console.log(error);
  }
};

//-----
// Ejemplo Toastify con callback:
// Al hacer click en el toast, se ejecuta la función callback asociada
const renderToast2 = async (text, callback) => {
  Toastify({
    text: text,
    duration: 5000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "steelBlue",
    },
    onClick: callback,
  }).showToast();
};

const crearProducto3 = async () => {
  try {
    let nuevoProducto3 = {};
    const res3 = await axiosCustom.post("/products", nuevoProducto3);
    console.log(res3);
    renderToast2("holi con callback", () => {
      console.log("primer callback");
    });
    renderToast2("ciao con callback", () => {
      console.log("segundo callback");
    });
  } catch (error) {
    console.log(error);
  }
};

//--------------------------------------------------
// SWEETALERT2

// Librería para hacer peticiones, develve promesas
// sweetAlert2  → librería de UI: Reemplaza al alert(), confirm() y prompt() con modales bonitos e interactivos.

// En gral se usa para confirmaciones/denegaciones
// porque dispara promesas (.then)

// Recordar asociar el sweetAlert2 al HTML:
// - <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
// - <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"/>

// Ejemplo mensaje con SweetAlert2:
const limpiarCarrito = () => {
  Swal.fire({
    title: "Seguro limpiar carrito?", // el !boton que viene por defecto es el de confirmar
    // si quiero que alguna de las condiciones no se cumpla, lo tengo que especificar, ej showConfirmButton: false
    showDenyButton: true,
    confirmButtonText: "Sí, limpiar",
    denyButtonText: `No, me arrepenti`,
    timer: 3000, //duracion de la alerta
  }).then((res) => {
    console.log(res);
    // la promesa se resuelve con un objeto que te dice cómo terminó la interacción del usuario con el alert:
    // {isConfirmed: false, isDenied: false, isDismissed: true, dismiss: 'backdrop'}
    if (res.isConfirmed) {
      Swal.fire({
        title: "Carrito limpiado",
        icon: "success",
      });
    } else if (res.isDenied) {
      //pongo "else if" y no "else" porque puedo clickear afuera del modal ntonces seria otra accion mas
      Swal.fire({
        title: "Carrito queda como estaba",
        icon: "info",
      });
    }
  });
};

const btnLimpiar = document.getElementById("limpiar");
btnLimpiar.addEventListener("click", limpiarCarrito);

//--------------------------------------------------
// TextField (MUI)

// Documentación oficial: https://mui.com/material-ui/react-text-field

// Un TextField es un componente de MUI (Material UI) que representa un
// campo de texto estilizado siguiendo las guías de Material Design.

// Funcionalidad:
// - Permite al usuario ingresar o editar texto (similar a <input type="text">).
// - Soporta etiquetas (label), placeholders y mensajes de ayuda (helperText).
// - Ofrece variantes de estilo: "outlined", "filled" y "standard".
// - Maneja estados como: error, disabled, required.
// - Puede ser de una sola línea o multilinea.

// Ejemplo básico:
// <TextField label="Nombre" variant="outlined" />
