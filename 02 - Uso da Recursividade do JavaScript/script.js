const mostrarChunks = (numero) => { //Recursivo

  if (numero === 0) {
    return ""
  } else if (numero === 1) {
    return "Chunk"
  } else {
    return "Chunk-" + mostrarChunks(numero - 1)
  }
}


console.log(mostrarChunks(5))

