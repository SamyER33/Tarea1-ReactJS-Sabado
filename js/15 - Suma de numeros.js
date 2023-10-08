
// 15 Programa que pase un arreglo de números y devuelva la suma de todos los números.

// Definimos una función llamada suma que toma un número variable de argumento.
function suma(...numeros) {
  // Utilizamos el método "reduce" para sumar todos los números en el arreglo.
  // El segundo argumento de "reduce" (0) es el valor inicial de la suma.
  const total = numeros.reduce((sum, num) => sum + num, 0);
  
  // Creamos una cadena de texto que muestra el resultado.
  const resultado = `La suma de todos los números es ${total}.`;
  
  // Devolvemos el resultado.
  return resultado;
}

// Ejemplo de uso:
const numeros = [15, 27, 38, 90, 65];
const resultado = suma(...numeros);

// Mostrar el texto original en la consola.
console.log("El arreglo de números es: " + numeros + ".")

// Mostrar el resultado en la consola.
console.log(resultado);
