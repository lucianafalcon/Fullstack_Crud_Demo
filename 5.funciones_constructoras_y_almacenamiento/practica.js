/********************************************************************************* 
Funciones Constructoras y Almacenamiento: 
clases - json - local y sesion storage
*********************************************************************************/

// Clases

// también llamados constructores (antes se llamaban funciones constructoras)
// analogía: una clase es un molde (fábrica de algo, que cada vez que la uso, crea algo nuevo)

// En js una función constructora es una función especial que se utiliza para inicializar un
// nuevo objeto. La idea es proporcionar una forma de crear objetos que modelen algo en el mundo
// real o en la lógica de un programa, como una Persona, un Pedido, o un Coche, por ejemplo.

// Antes de la introducción de las clases en ECMAScript 2015 (ES6), las funciones constructoras
// eran la manera estándar en js para crear tipos de datos que simularan las clases como se conocen
// en otros lenguajes de programación orientados a objetos como Java o C#. A través de las funciones
// constructoras, se podían definir propiedades y métodos específicos para un tipo de objeto,
// reutilizando la misma estructura base cada vez que se instanciaba un objeto nuevo.

class Usuario {
  // paso 1: la construccion de las propiedades
  constructor(nombre, email, password, edad) {
    this.nombre = nombre; //se usa this.
    this.email = email;
    this.password = password;
    this.edad = edad;
  }

  //paso 3: en la creacion de los métodos
  saludar(uno, dos, tres) {
    console.log(`hola soy ${this.nombre} como estas? ${uno}`);
  }
}

// paso 2: instanciar una class
let usuario1 = new Usuario("pepe", "pepe@gmail.com", "222", "32");
let usuario2 = new Usuario("juan", "juan@gmail.com", "333", "44");
let usuario3 = new Usuario("maria", "maria@gmail.com", "444", "22");

let usuarios = [usuario1, usuario2, usuario3];
console.log(usuarios);

usuario2.saludar("este es un parametro");

//--------------------------------------------------
// JSON → formato → "un tipo de dato mas"

// osea json es un formato que comunica el frontend con un codigo externo (por ejemplo: una base de datos, el back, etc.)
//Recupero info de un formulario html, para que el admin registre nuevos productos
// una foto
// el nombre
// precio, etc ...

// Opción 1 - mando datos del front al back (por ej. cuando lleno un formulario online)
let producto = {
  image: "https://laimagen.com",
  nombre: "telefono",
  precio: 100,
};

// 1) convertir a texto JSON
const enviarProductoAlBack = (queInfo) => {
  console.log(producto);
  // transformarlo en un string
  let productoListoParaElBackend = JSON.stringify(producto);
  console.log(productoListoParaElBackend);
};

// 2) enviar los datos parseados a back (esto lo vemos despues con fetch usando POST)

enviarProductoAlBack(producto);

//--------------------------------------------------
// Opción 2 - traigo datos del back y los uso en el front (por ej. cuando quiero ver/modificar info de una base de datos)
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

// 1) traigo los datos del back al front
let productosDelBack = JSON.stringify(productos);

// 2) parseo los datos traídos (osea paso de strings a arrays)
const parsearJson = (informacionParaParsear) => {
  JSON.parse("[]"); // []
  JSON.parse("true"); // true
  JSON.parse("{}"); // {}

  let parseados = JSON.parse(informacionParaParsear); // antes --> "[{}{}]" --> ahora [{}{}]
  console.log(parseados);
};

parsearJson(productosDelBack);

//--------------------------------------------------
// Local y Session Storage

// - Es un almacenamiento vinculado a un origen específico (protocolo + dominio + puerto),
// independiente de la IP y separado para cada dominio
// - No se comparte entre usuarios diferentes ni navegadores distintos
// - Todo lo que guardo en el local/session storage tiene que ser del tipo stringify

// Application → ahí ves Local Storage y Session Storage con sus claves y valores
// Console → muestra lo que escribas en console.log() o mensajes de error, de JS
// Elements → ahí inspeccionas el HTML y CSS en tiempo real

// con HTmL y js --> podemos cambiar el valor
// con CSS y js --> podemos hacer estilos dinamicos en base a esa variable

let modoClaro = JSON.parse(localStorage.getItem("modoClaro") || "true");

let interruptor = document.getElementById("btn-drk");
interruptor.addEventListener("click", () => {
  modoClaro = !modoClaro;
  localStorage.setItem("modoClaro", JSON.stringify(modoClaro));
  console.log(modoClaro);
});

//--------------------------------------------------
// storage

// guardar info
localStorage.setItem("carrito", JSON.stringify(productos));
localStorage.setItem("ombreDelUsuario", "pepe");

// leer info
let productosDelCarrito = JSON.parse(localStorage.getItem("carrito"));
console.log(productosDelCarrito);

// actualizar info --> volviendo a crear
localStorage.setItem("nombreDelUsuario", "juan");

// elimina una info en particular
localStorage.removeItem("carrito");

// limpiar toda la info del storage
localStorage.clear();

/********************************************************************************/
// Funciones de Orden Superior

// En JavaScript, las funciones del orden superior son funciones que pueden recibir otras
// funciones como argumentos, retornar funciones como resultado, o ambas cosas.
// Este concepto es fundamental en la programación funcional y es una característica poderosa
// de JavaScript, que permite crear código más modular, reutilizable y flexible.

// programación imperativa (en gral no se usa, se prefiere la declarativa)

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

//--------------------------------------------------
// Ejemplo de un sistema bancario

// que tenga:
// clientes
// consultar cliente // alias
// depositar // alias
// extraer // alias

const clientesBanco = [
  {
    id: 1,
    nombre: "María Elena Rodríguez",
    alias: "maria.trabajo.2024",
    cbu: "0170001420000012345678",
    tipoCuenta: "Cuenta Corriente",
    saldo: 850,
  },
  {
    id: 2,
    nombre: "Carlos Alberto Méndez",
    alias: "carlos.ahorro.personal",
    cbu: "0170002330000098765432",
    tipoCuenta: "Caja de Ahorro",
    saldo: 125,
  },
  {
    id: 3,
    nombre: "Ana Sofía González",
    alias: "ana.sofia.cuentas",
    cbu: "0170001420000056789012",
    tipoCuenta: "Cuenta Corriente",
    saldo: 275,
  },
  {
    id: 4,
    nombre: "Roberto Daniel Fernández",
    alias: "roberto.ahorros.casa",
    cbu: "0170002330000034567890",
    tipoCuenta: "Caja de Ahorro",
    saldo: 456,
  },
  {
    id: 5,
    nombre: "Lucía Beatriz Silva",
    alias: "lucia.empresa.2024",
    cbu: "0170001420000078901234",
    tipoCuenta: "Cuenta Corriente",
    saldo: 200,
  },
  {
    id: 6,
    nombre: "Diego Alejandro Torres",
    alias: "diego.personal.ahorro",
    cbu: "0170002330000012309876",
    tipoCuenta: "Caja de Ahorro",
    saldo: 789,
  },
  {
    id: 7,
    nombre: "Valentina López Vargas",
    alias: "vale.lopez.cuentas",
    cbu: "0170001420000045678901",
    tipoCuenta: "Cuenta Corriente",
    saldo: 189,
  },
  {
    id: 8,
    nombre: "Sebastián Martín Castro",
    alias: "seba.ahorro.futuro",
    cbu: "0170002330000067890123",
    tipoCuenta: "Caja de Ahorro",
    saldo: 100,
  },
  {
    id: 9,
    nombre: "Camila Fernanda Ruiz",
    alias: "camila.trabajo.banco",
    cbu: "0170001420000023456789",
    tipoCuenta: "Cuenta Corriente",
    saldo: 320,
  },
  {
    id: 10,
    nombre: "Matías Nicolás Herrera",
    alias: "mati.ahorros.personal",
    cbu: "0170002330000089012345",
    tipoCuenta: "Caja de Ahorro",
    saldo: 920,
  },
  {
    id: 11,
    nombre: "Florencia Soledad Morales",
    alias: "flor.empresa.corriente",
    cbu: "0170001420000090123456",
    tipoCuenta: "Cuenta Corriente",
    saldo: 7800,
  },
  {
    id: 12,
    nombre: "Joaquín Eduardo Vega",
    alias: "joaquin.ahorro.casa",
    cbu: "0170002330000001234567",
    tipoCuenta: "Caja de Ahorro",
    saldo: 234,
  },
  {
    id: 13,
    nombre: "Antonella Guadalupe Sosa",
    alias: "anto.personal.banco",
    cbu: "0170001420000067891234",
    tipoCuenta: "Cuenta Corriente",
    saldo: 1560,
  },
  {
    id: 14,
    nombre: "Nicolás Emiliano Paz",
    alias: "nico.ahorro.estudios",
    cbu: "0170002330000045678912",
    tipoCuenta: "Caja de Ahorro",
    saldo: 8900,
  },
  {
    id: 15,
    nombre: "Gabriela Patricia Ramos",
    alias: "gaby.trabajo.corriente",
    cbu: "0170001420000078912345",
    tipoCuenta: "Cuenta Corriente",
    saldo: 4250,
  },
  {
    id: 16,
    nombre: "Federico Ariel Domínguez",
    alias: "fede.ahorro.personal",
    cbu: "0170002330000023456781",
    tipoCuenta: "Caja de Ahorro",
    saldo: 678,
  },
  {
    id: 17,
    nombre: "Martina Isabel Rojas",
    alias: "martina.empresa.banco",
    cbu: "0170001420000034567812",
    tipoCuenta: "Cuenta Corriente",
    saldo: 675,
  },
  {
    id: 18,
    nombre: "Tomás Benjamín Acosta",
    alias: "tomas.ahorro.futuro",
    cbu: "0170002330000056781234",
    tipoCuenta: "Caja de Ahorro",
    saldo: 3450,
  },
  {
    id: 19,
    nombre: "Sofía Valentina Núñez",
    alias: "sofia.personal.corriente",
    cbu: "0170001420000012347890",
    tipoCuenta: "Cuenta Corriente",
    saldo: 210,
  },
  {
    id: 20,
    nombre: "Agustín Maximiliano Flores",
    alias: "agus.ahorro.casa",
    cbu: "0170002330000078901256",
    tipoCuenta: "Caja de Ahorro",
    saldo: 5120,
  },
];

const funcionConsultar = function (dameElAlias) {
  let cliente = this.clientes.find((cliente) => cliente.alias === dameElAlias);
  return cliente;
};

const funcionDepositar = function (elAlias, monto) {
  if (!elAlias || !monto) {
    // "dasd" , "12321" --> truthy ||||| undefined - undefined --> falsy
    return "debes pasarme el alias y el monto";
  }

  if (typeof monto === "number") {
    return "debes pasarme un numero como monto";
  }

  if (monto < 1) {
    return "el monto debe ser mayor a cero";
  }

  let cliente = this.consultarCliente(elAlias);

  if (cliente !== undefined) {
    cliente.saldo += monto;
    return `La operacion salio exitosa, el nuevo saldo de ${cliente.nombre} es de 
      ${cliente.saldo}
      `;
  } else {
    return `lo siento, ese cliente no existe`;
  }
};
const funcionExtraer = function (elAlias, monto) {
  let cliente = this.consultarCliente(elAlias);
  if (cliente) {
    // objeto ---> truthy ---> undefined es un falsy
    // cliente.saldo = cliente.saldo - monto
    if (cliente.saldo >= monto) {
      cliente.saldo -= monto;
      return `La operacion salio exitosa, el nuevo saldo de ${cliente.nombre} es de
          ${cliente.saldo}
        `;
    } else {
      return "no hay saldo";
    }
  } else {
    return "no se encontro el cliente ";
  }
};
const banco = {
  clientes: clientesBanco,
  consultarCliente: funcionConsultar,
  depositar: funcionDepositar,
  extraer: funcionExtraer,
};

console.log(banco.clientes);

let encontrado = banco.consultarCliente("roberto.ahorros.casa");
console.log(encontrado);

let ticket = banco.depositar("pepe.2025");
console.log(ticket);

let ticketExtraccion = banco.extraer("lucia.empresa.2024", 100);
console.log(ticketExtraccion);
