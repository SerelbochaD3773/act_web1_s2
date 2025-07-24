let precioUnitario = 25;
let cantidad = 60;
let precioFinal;

if (cantidad <= 10) {
    precioFinal = precioUnitario * cantidad * 1.00;
} else if (cantidad <= 10 && cantidad < 50) {
    precioFinal = precioUnitario * cantidad * 0.90; 
} else if (cantidad >= 50) {
    precioFinal = precioUnitario * cantidad * 0.80;
} else {
    precioFinal = "Cantidad no válida";


}
console.log(precioFinal);