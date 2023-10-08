
// 6 Programa que convierte decimal a romano hasta el número 1000.

function decimalARomano(numero) {
  // Verificar si el número está fuera del rango permitido. 
  if (numero < 1 || numero > 1000) {
    return "Número fuera de rango. Debe estar entre 1 y 1000.";
  }

  // Arreglos para los valores decimales y los símbolos romanos correspondientes.
  const valoresDecimales = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const simbolosRomanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  // Variable para almacenar la representación romana.
  let resultado = "";

  // Iterar a través de los valores decimales y construir la representación romana.
  for (let i = 0; i < valoresDecimales.length; i++) {
    while (numero >= valoresDecimales[i]) {
      resultado += simbolosRomanos[i]; // Agregar el símbolo romano al resultado.
      numero -= valoresDecimales[i]; // Restar el valor decimal del número.
    }
  }

  return resultado;
}

// Ejemplos de uso:
const numero = 95;
const conversionARomano = decimalARomano(numero);

// Mostrar el resultado en la consola.
console.log("El número " + numero + ", en romano es " + conversionARomano + ".")

