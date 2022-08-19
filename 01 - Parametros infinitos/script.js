const calcularMedia = (notas) => {
  
  let media = 0

  notas.forEach(nota => media += nota );
  
  return media / notas.length
}

console.log(calcularMedia([10, 10, 10, 10, 9]))
console.log(calcularMedia([25, 75]))