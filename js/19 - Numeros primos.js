
// 19 Programa que muestre los numeros primos de 1 a 1000.

// Función para verificar si un número es primo.
function esPrimo(numero) {
  if (numero <= 1) { // Si el número es menor o igual a 1, no es primo.
    return false;
  }
  if (numero <= 3) { // 2 y 3 son primos.
    return true;
  }
  if (numero % 2 === 0 || numero % 3 === 0) { // Si es divisible por 2 o 3, no es primo.
    return false;
  }
  let i = 5;
  while (i * i <= numero) { // Verificamos divisibilidad hasta la raíz cuadrada del número.
    if (numero % i === 0 || numero % (i + 2) === 0) { // Si es dividible, no es primo.
      return false;
    }
    i += 6; // Optimización: saltamos de 6 en 6 para reducir las verificaciones innecesarias.
  }
  return true; // Si no se encontraron divisores, es primo.
}

// Iteramos a través de los números del 1 al 1000 y mostramos los números primos.
for (let numero = 1; numero <= 1000; numero++) {
  if (esPrimo(numero)) {

    // Mostramos el número primo en la consola.
    console.log(numero);
  }
}
