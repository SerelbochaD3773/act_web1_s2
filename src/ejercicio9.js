let nota = "LA";
let numeroMIDI;
switch (nota) {
    case "DO":
        numeroMIDI = 60;
        break;
    case "RE":
        numeroMIDI = 62;
        break;
    case "MI":
        numeroMIDI = 64;
        break;
    case "FA":
        numeroMIDI = 65;
        break;
    case "SOL":
        numeroMIDI = 67;
        break;
    case "LA":
        numeroMIDI = 69;
        break;
    case "SI":
        numeroMIDI = 71;
        break;
    default:
        numeroMIDI = "Nota desconocida";
        break;
} console.log(numeroMIDI);
