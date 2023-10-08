
// 16 Programa que pase un arreglo de edades y devuelva la mayor y la menor.

// Definir una función que encuentra la edad mayor y la edad menor.
function encontrarMayorMenorEdad(...edades) {
  
  // Verificar si no se proporcionaron edades.
  if (edades.length === 0) {
    return "No hay edades para comparar.";
  }

  // Inicializar las edades mayor y menor con el primer elemento del arreglo.
  let mayor = menor = edades[0];
  
  // Iterar a través de las edades restantes para encontrar la mayor y la menor edad.
  for (let i = 1; i < edades.length; i++) {
    // Comprobar si la edad actual es mayor que la edad mayor actual.
    if (edades[i] > mayor) {
      mayor = edades[i];
      // Comprobar si la edad actual es menor que la edad menor actual.
    } else if (edades[i] < menor) {
      menor = edades[i];
    }
  }

  // Devolver el resutlado en forma de cadena de texto.
  return `La edad mayor es ${mayor} y la edad menor es ${menor}`;

}
  
// Ejemplo de uso:
const edades = [5, 10, 20, 25, 30, 40, 45, 50, 60, 65, 70];
const resultado = encontrarMayorMenorEdad(...edades);


// Mostrar el arreglo en la consola.
console.log("El arreglo es: " + edades + ".");

// Mostrar el resultado en la consola.
console.log(resultado);
