
// 13 Programa que devuelva el texto con la primera letra de cada palabra en mayúscula.

// Función para capitalizar la primera letra de cada palabra en una cadena de texto.
function capitalizarPalabras(texto) {
    // Dividir el texto en palabras.
    let palabras = texto.split(" ");
    
    // Capitalizar la primera letra de cada palabra.
    for (var i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
        // Obtener la primera letra de la palabra, capitalizarla y luego concatenar el resto de la palabra sin modificarla.
    }
    
    // Unir las palabras capitalizadas nuevamente en un solo texto.
    let textoCapitalizado = palabras.join(" ");
    
    return textoCapitalizado;
}

// Ejemplo de uso:
let texto = "hola mundo, hoy tengo ganas de hacer un rico pastel de chocolate";
let textoCapitalizado = capitalizarPalabras(texto);

// Mostrar el texto original en la consola.
console.log("Texto original: " + texto + ".");

// Mostrar el resultado en la consola.
console.log("Resultado: " + textoCapitalizado + ".");
