
// 3 Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter.

function miFuncion(cadena, caracter) {
    // Utilizamos el método split() para dividir la cadena en un array.
    // Utilizando el caracter especificado como separador.
    const arraySeparado = cadena.split(caracter);
    return arraySeparado;
  }
  
  // Ejemplo de uso:
  const texto = 'Hola ¿qué tal cómo estás?';
  const caracterSeparador = ' ';

  console.log("Texto original: " + texto);

  // Llamamos a la función miFuncion para separar el texto utilizando el espacio como separador.
  const resultado = miFuncion(texto, caracterSeparador);

  // Mostrar el resultado separado en la consola.
  console.log(resultado);
  