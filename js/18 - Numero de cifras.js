
// 18 Programa que devuelva el número de cifras de un número entero.

// Función para contar las cifras de un número entero.
function contarCifras(numero) {
  // Convierte el número a una cadena para facilitar el conteo de cifras.
  const numeroStr = numero.toString();
  
  // Usa la propiedad length para contar las cifras en la cadena.
  const cifras = numeroStr.length;
  
  return cifras;
}

// Ingresa un número entero.
const numero = parseInt(prompt("Ingresa un número entero: "));

// Llama a la función para contar las cifras y muestra el resultado.
const resultado = contarCifras(numero);

// Mostrar el entero ingresado por el usuario.
console.log("El número entero ingresado es: " + numero + ".");

// Mostrar el resultado en la consola
console.log(`${numero} tiene ${resultado} cifras.`);
