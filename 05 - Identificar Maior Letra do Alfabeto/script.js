const maiorLetra = (frase) => {

  let StringParaArray = frase.toLowerCase().split("").sort()

  return console.log(StringParaArray[StringParaArray.length - 1])

}

maiorLetra("Adoro Sorvete de Flocos")
maiorLetra("Vamos jogar Xadrez hoje a noite? ")


