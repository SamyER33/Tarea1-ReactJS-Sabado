
// 5 Calcular la edad de una persona.

// Función para calcular la edad a partir de una fecha de nacimiento.
function calcularEdad(fechaNacimiento) {
  const fechaActual = new Date();
  const añoNacimiento = fechaNacimiento.getFullYear(); // Obtenemos el año de nacimiento.
  const mesNacimiento = fechaNacimiento.getMonth(); // Obtenemos el mes de nacimiento.
  const diaNacimiento = fechaNacimiento.getDate(); // Obtenemos el día de nacimiento.
  const añoActual = fechaActual.getFullYear(); //Obtenemos el año actual.
  const mesActual = fechaActual.getMonth(); // Obtenemos el mes actual.
  const diaActual = fechaActual.getDate(); // Obtenemoe el día actual.

  //Calculamos la edad inicial.  
  let edad = añoActual - añoNacimiento;

  // Ajustamos la edad si aún no ha cumplido años este año.
  if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
    edad--;
  }

  return [diaNacimiento, mesNacimiento, añoNacimiento, edad];
}
  
// Ejemplo de uso:
// Definimos la fecha de nacimiento: 1 de octubre de 1988.
const fechaNacimiento = new Date(1988, 9, 1);

// Calculamos la edad.
const [diaNacimiento, mesNacimiento, añoNacimiento, edad]= calcularEdad(fechaNacimiento);

// Mostramos la fecha de nacimiento.
console.log("La fecha de nacimiento es: " + diaNacimiento + "/" + mesNacimiento + "/" + añoNacimiento + ".")

// Mostramos la edad en la consola.
console.log("La edad es: " + edad + " años.");
