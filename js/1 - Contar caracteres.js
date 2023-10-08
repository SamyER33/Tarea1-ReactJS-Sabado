
// 1 Programa una función que cuente el número de caracteres de una cadena de texto.

// Definimos una función llamada contarCaracteres que toma una cadena como entrada. 
function contarCaracteres(cadena) {
    // Usamos la propiedad length de la cadena para contar los caracteres.
    let numeroCaracteres = cadena.length;
    // Devolvemos una cadena que incluye el texto original y el número de caracteres.
    return `Texto: ${cadena}, Número de caracteres: ${numeroCaracteres}`;
  }
  
  // Ejemplo de uso:
  // Creamos una variable llamada cadena y le asignamos un valor "Hola Mundo".
  let cadena = "Hola Mundo";
  // Llamamos a la función contarCaracteres con la cadena como argumento y guardarmos el resultado en la variable resultado.
  let resultado = contarCaracteres(cadena);
  
   // Mostrar el resultado en la consola.
  console.log(resultado);
