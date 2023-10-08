
// 11 Programa que tome la primera letra de cada palabra y lo devuelva en mayúsculas.

// Función que toma una frase y devuelve las iniciales en mayúsculas de cada palabra de la cadena de texto.
function obtenerInicialesMayusculas(frase) {
    // Dividir la frase en palabras.
    const palabras = frase.split(' ');

    // Inicializar una cadena vacía para almacenar las iniciales en mayúsculas.
    let iniciales = '';

    // Iterar a través de cada palabra y obtener la primera letra en mayúsculas.
    palabras.forEach(palabra => {
        // Verificar si la palabra no está vacía.
        if (palabra) {
            // Obtener la primera letra de la palabra en mayúsculas y agregarla a 'iniciales'.
            iniciales += palabra[0].toUpperCase();
        }
    });

    // Devolver las iniciales en mayúsculas.
    return iniciales;
}

// Ejemplo de uso:
const frase = "Brenda Samara Escobar Avila";
const resultado = obtenerInicialesMayusculas(frase);

// Mostrar el texto original en la consola.
console.log("Texto original: " + frase + ".");

// Mostrar el resultado en la consola.
console.log("Resultado: " + resultado + ".");
