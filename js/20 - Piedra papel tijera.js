
// 20 Programa que realice el juego de piedra, papel o tijera.

function juegoPiedraPapelTijera() {
  const opciones = ["Piedra", "Papel", "Tijera"];
  
  while (true) {
    // El jugador elige una opción.
    const jugador = prompt("Elige Piedra, Papel o Tijera (o pulsa Cancelar para salir): ");
    
    if (jugador === null) {
      alert("¡Adiós!");
      break;
    }
    
    // Asegurarse de que la entrada del jugador esté en formato capitalizado.
    const jugadorCapitalizado = jugador.charAt(0).toUpperCase() + jugador.slice(1).toLowerCase();
    
    // Verificar si la opción del jugador es válida.
    if (!opciones.includes(jugadorCapitalizado)) {
      alert("Opción no válida. Por favor, elige Piedra, Papel o Tijera.");
      continue;
    }
    
    // La computadora elige una opción al azar.
    const computadora = opciones[Math.floor(Math.random() * opciones.length)];
    
    // Determina el ganador.
    if (jugadorCapitalizado === computadora) {
      alert(`Tú elegiste ${jugadorCapitalizado}\nLa computadora eligió ${computadora}\n¡Es un empate!`);
    } else if (
      (jugadorCapitalizado === "Piedra" && computadora === "Tijera") ||
      (jugadorCapitalizado === "Tijera" && computadora === "Papel") ||
      (jugadorCapitalizado === "Papel" && computadora === "Piedra")
    ) {
      alert(`Tú elegiste ${jugadorCapitalizado}\nLa computadora eligió ${computadora}\n¡Ganaste!`);
    } else {
      alert(`Tú elegiste ${jugadorCapitalizado}\nLa computadora eligió ${computadora}\nLa computadora gana.`);
    }
  }
}

// Inicia el juego.
juegoPiedraPapelTijera();
