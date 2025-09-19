/********************************************************************************* 
Simulación de Banco en JavaScript.

Contenido:
  clientes
  consultar cliente // alias
  depositar // alias
  extraer // alias
*********************************************************************************/

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
