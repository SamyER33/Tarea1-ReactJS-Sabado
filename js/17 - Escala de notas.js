
// 17 Programa de escala de notas de 0 a 10.

// Función para obtener la calificación según la nota.
function obtenerCalificacion(nota) {
    if (nota < 0 || nota > 10) {
        return "Nota fuera de rango";
    } else if (nota >= 0 && nota < 6) {
        return "Mal estudiante";
    } else if (nota >= 6 && nota < 8) {
        return "Estudiante regular";
    } else if (nota >= 8 && nota < 10) {
        return "Buen estudiante";
    } else {
        return "Excelente estudiante";
    }
}

// Solicita al usuario que ingrese una nota.
let nota = parseFloat(prompt("Ingrese la nota (0-10): "));

// Verificar si la entrada del usuario es un número válido.
if (!isNaN(nota)) {

    // Llamar a la función obtenerCalificacion para obtener la calificación.
    let resultado = obtenerCalificacion(nota);
    
    // Mostrar la nota ingresada por el usuario.
    console.log("La nota ingresada es: " + nota + ".");
    
    // Mostrar el resultado en la consola.
    console.log(`La calificación es: ${resultado}`);
} else {
    
    // Mostrar un mensaje de error si la entrada de la nota no es válida.
    console.log("Ingrese una nota válida (número entre 0 y 10)");
}
