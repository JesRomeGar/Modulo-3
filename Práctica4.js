//Lab 1//

console.log("Laboratorio 1")

const producto = {
    numero: 9,
    precio: 5.50,
    tipo: "alimento"
};
console.log(producto)

let total = producto.numero <= 0 ? 0 : producto.numero * producto.precio;

console.log("El total es " + total + "€");


let iva;

if (producto.tipo == "alimento") {
    iva = 0.1;
}

else if (producto.tipo == "libro") {
    iva = 0.04;
}

else {
    iva = 0.21;
};

console.log("El IVA aplicado es del " + iva);

let totalConIva = total * iva + total;

console.log("IVA: " + total * iva + "€");

console.log("Total con el IVA aplicado: " + totalConIva + "€");


//Lab 2//

console.log("Laboratorio 2");

const empleado = {
    bruto: 34000,
    hijos: 2,
    pagas: 14
};

console.log(empleado)

let retencion;

if (empleado.bruto <= 12000) {
    retencion = 0
}
else if (empleado.bruto >= 12001 && empleado.bruto <= 24000) {
    retencion = 8
}
else if (empleado.bruto >= 24001 && empleado.bruto <= 34000) {
    retencion = 16
}
else if (empleado.bruto >= 34001) {
    retencion = 30
}
 
empleado.hijos != 0 ? retencion -2 : retencion;

console.log("La retención es de un " + retencion + "%");

let retencionDeSueldo = (retencion * empleado.bruto / 100);

console.log("Que en € serían " + retencionDeSueldo + "€")

let netoAnual = empleado.bruto - retencionDeSueldo

console.log("Sueldo neto anual: " + netoAnual + "€")

let netoMensual = netoAnual / empleado.pagas

console.log("Sueldo neto mensual: " + netoMensual + "€")