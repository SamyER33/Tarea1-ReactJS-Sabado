
// 9 Programa que valide si una palabra es palíndromo o no.

// Función para verificar si una palabra es un palíndromo.
function esPalindromo(palabra) {
  // Convierte la palabra a minúsculas para evitar problemas de mayúsculas y minúsculas.
  palabra = palabra.toLowerCase();
    
  // Elimina los espacios en blanco de la palabra.
  palabra = palabra.replace(/\s/g, "");
  
  // Comprueba si la palabra es igual a su inversa.
  return palabra === palabra.split("").reverse().join("");
}

// Ejemplo de uso:  
// Solicita al usuario que ingrese una palabra.
const palabra = prompt("Ingrese una palabra:");

// Mostrar el texto ingresado por el usuario.
console.log(`Palabra ingresada: ${palabra}`);

// Llama a la función y muestra el resultado.
if (esPalindromo(palabra)) {
  console.log(`"${palabra}" es un palíndromo.`);
} else {
  console.log(`"${palabra}" no es un palíndromo.`);
}
