
// 4 Programa una función para que calcule el precio de un producto aplicando un descuento.

// Función ue calcula el precio con descuento.
function calcularPrecioConDescuento(precioOriginal, porcentajeDescuento) {
  // Verificar que el porcentaje de descuento sea válido.
  if (porcentajeDescuento < 0 || porcentajeDescuento > 100) {
    throw new Error("El porcentaje de descuento debe estar entre 0 y 100");
  }

  // Calcular el descuento.
  const descuento = (precioOriginal * porcentajeDescuento) / 100;
  
  // Calcular el precio con el descuento aplicado.
  const precioConDescuento = precioOriginal - descuento;

  // Devolver el precio con descuento.
  return precioConDescuento;
}
  
// Ejemplo de uso:
const precioOriginal = 1800;
const porcentajeDescuento = 15;
const precioFinal = calcularPrecioConDescuento(precioOriginal, porcentajeDescuento);

//Mostrar el precio original y el porcentaje de descuento.
console.log("El precio sin descuento es: " + precioOriginal + ".")
console.log("El descuento que se aplica es de: " + porcentajeDescuento + "%.")

// Mostrar el precio con el descuento aplicado.
console.log("El precio con descuento es: " + precioFinal + ".");
