let nota = 83;
let calificacion;
if (nota >= 90 && nota <= 100) {
    calificacion = "A";
} else if (nota >= 80 && nota <= 89) {
    calificacion = "B";
} else if (nota >= 70 && nota <= 79) {
    calificacion = "C";
} else if (nota >= 60 && nota <= 69) {
    calificacion = "D";
} else if (nota < 60) {
    calificacion = "F";
} else {
    calificacion = "Nota no válida";
}
console.log(calificacion);