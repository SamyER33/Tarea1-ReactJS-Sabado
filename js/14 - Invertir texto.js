
// 14) Programa que devuelva la cadena de texto invertida.

// Definir una función llamada invertirCadena.
function invertirCadena(cadena) {
  // Dividimos la cadena en un arreglo de caracteres.
  // Invertimos el arreglo.
  // Unimos la cadena nuevamente.
  return cadena.split('').reverse().join('');
}

// Ejemplo de uso:
let texto = "¡¡¡Hola Mundo!!!, ¿Quieres jugar una partida de ajedréz?";

// Llamamos a la función invertirCadena con el texto.
let textoInvertido = invertirCadena(texto);

// Mostrar el texto original en la consola.
console.log("Texto original: " + texto);

// Mostrar el resultado en la consola.
console.log(textoInvertido);
