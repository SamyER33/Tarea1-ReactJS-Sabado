
// 12 Programa que devuelva la cantidad de palabras de una cadena de texto.

// Definir una función para contar palabras en una cadena de texto.
function contarPalabras(cadena) {
    
    // Divide la cadena en palabras utilizando espacios como separadores.
    let palabras = cadena.split(/\s+/);
    
    // Filtra las palabras vacías.
    palabras = palabras.filter(function(palabra) {
        return palabra.trim() !== '';
    });
    
    // Devuelve la cantidad de palabras.
    return palabras.length;
}

// Solicita al usuario que ingrese una cadena de texto.
let texto = prompt("Ingrese una frase: ");

// Mostrar el texto ingresado por el usuario.
console.log("Texto ingresado: " + texto);

// Llama a la función contarPalabras y muestra el resultado en la consola.
var cantidadPalabras = contarPalabras(texto);
console.log("La cantidad de palabras es: " + cantidadPalabras);
