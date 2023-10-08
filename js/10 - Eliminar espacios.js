
// 10 Programa que elimine los espacios de una cadena de texto.

// Definimos una función llamada eliminarEspacios que toma una cadena de texto como entrada.
function eliminarEspacios(cadena) {
  // Utilizamos el método replace con una expresión regular para eliminar los espacios en blanco.
  // Con una cadena vacía ("") en toda la cadena de texto de entrada.
  return cadena.replace(/\s/g, "");
}

// Ejemplo de uso:
const textoConEspacios = "Hola Mundo, Hoy Es Un Día Lluvioso";

// Llamamos a la función eliminarEspacios con la cadena de texto.
const resultado = eliminarEspacios(textoConEspacios);

// Mostrar el texto original.
console.log("Texto original: " + textoConEspacios + ".");

// Mostramos el resultado en la consola.
console.log("Resultado: " + resultado + ".");
