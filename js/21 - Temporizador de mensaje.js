
// 21 Programa con temporizador que muestre un mensaje cada cierto tiempo.

// Función que muestra el mensaje.
function mostrarMensaje() {
  console.log("Hola Mundo");
  // Agrega un salto de linea después de cada mensaje.
  console.log("\n"); 
}

// Intervalo en milisegundos (en este caso, 3000 ms que equivalen a 3 segundos).
const intervalo = 3000;

// Configurar un temporizador que llame a la función mostrarMensaje cada intervalo de tiempo
const temporizador = setInterval(mostrarMensaje, intervalo);

// Definir una variable para llevar el registro del número de mensajes mostrados.
let contadorMensajes = 0;


// Puedes detener el temporizador después de un cierto número de repeticiones o cuando sea necesario:
// clearInterval(temporizador);
