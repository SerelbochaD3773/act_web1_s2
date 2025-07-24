let dia = "sabado";
let resultado;
switch (dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        resultado = "laborable";
        break;
    case "sabado":
    case "domingo":
        resultado = "fin de semana";
        break;
    default:
        resultado = "Día no excistente";
        
}
console.log(resultado);