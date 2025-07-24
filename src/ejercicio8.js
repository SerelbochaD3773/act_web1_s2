let edad = 67;
let distanciaKm = 120;
let tarifaBase = distanciaKm  * 0.21 ;
let descuento;
if (edad < 18) {
    descuento = 0.2;
} else if (edad >= 65) {
    descuento = 0.4;
} else {
    descuento = 0;
}

let precioTransporte = tarifaBase * (1 - descuento);
console.log(precioTransporte);