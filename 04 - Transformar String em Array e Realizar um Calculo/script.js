const elevarAoQuadrado = (numeros) => {

  let arrayNumeros = numeros.toString().split("")

  let transformarEmNumero = arrayNumeros.map(num => Number(num**2))

  console.log(transformarEmNumero)

}

elevarAoQuadrado(1235)
