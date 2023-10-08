
// 2 Programa una función que te devuelva el texto recortado según el número de caracteres indicados.

// Definición de la función miFuncion.
function miFuncion(texto, numCaracteres) {
  //Comprobamos si el numCaracteres es mayor o igual a la longitud del texto.
    if (numCaracteres >= texto.length) {
      // Si es verdadero, devolver el texto completo.
      return texto;
    } else {
      // Si es falso, devolcer una subcadena del texto con los primeros numCaracteres caracteres.
      return texto.substring(0, numCaracteres);
    }
  }
  
  // Ejemplo de uso:
  let texto = "Hola Mundo";
  let numCaracteres = 4;

  // Mostrar el texto original en la consola.
  console.log("Texto original: " + texto);

  // Mostrar el resultado en la consola.
  let resultado = miFuncion(texto, numCaracteres);
  console.log("Resultado: " + resultado);
