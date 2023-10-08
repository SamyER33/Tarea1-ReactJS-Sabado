
// 7 Programa que convierte un decimal a binario.

// Función para convertir un número decimal en su representación binaria.
function decimalABinario(numero) {
    if (numero === 0) {
        return "0"; // Si el número es 0, su representación binaria también es 0.
    } else {
        let binario = "";
        while (numero > 0) {
            const residuo = numero % 2; // Calcula el residuo al dividir por 2.
            binario = residuo + binario; // Agrega el residuo al principio de la cadena binaria.
            numero = Math.floor(numero / 2); // Divide el número decimal por 2 y redondea hacia abajo.
        }
        return binario; // Retorna la representación binaria.
    }
}

// Ingresa el número decimal que deseas convertir.
const numeroDecimal = parseInt(prompt("Ingresa un número decimal:"));

// Mostrar el texto ingresado por el usuario.
console.log(`Número decimal ingresado: ${numeroDecimal}`);

// Llama a la función para realizar la conversión e imprime el resultado.
const resultadoBinario = decimalABinario(numeroDecimal);
console.log(`El número binario equivalente es: ${resultadoBinario}`);
