
// 8 Programa que devuelva el número de vocales de una cadena de texto.

// Función para contar las vocales en una cadena de texto.
function contarVocales(cadena) {
    // Convertir la cadena a minúsculas para considerar las vocales en mayúsculas y minúsculas.
    cadena = cadena.toLowerCase();
  
    // Inicializar un contador para las vocales.
    let contador = 0;
  
    // Definir una cadena que contiene todas las vocales.
    const vocales = "aeiou";
  
    // Iterar a través de la cadena y contar las vocales.
    for (let i = 0; i < cadena.length; i++) {
      // Verificar si el caracter actual está incluido en la cadena de vocales.
      if (vocales.includes(cadena[i])) {
        // Si el caracter es una vocal, aumentar el contador.
        contador++;
      }
    }

    // Devolver el contador que contiene el número de vocales encontradas en la cadena de texto.  
    return contador;
  }
  
  // Ejemplo de uso:
  const cadena = "Hola Mundo, Hoy Me Encuentro Bien.";

  // Mostrar el texto original.
  console.log("Texto original: " + cadena);

  // Llamar a la función.
  const numVocales = contarVocales(cadena);

  // Mostrar el resultado en la consola.
  console.log("El número de vocales en la cadena es: " + numVocales + ".");
