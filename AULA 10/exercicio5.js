function sortWords(lista) {
    return new Promise(resolve => {
      resolve(console.log(lista.sort()))
    })
  }




function makeAllCaps(lista) {
    return new Promise((resolve, reject) => {
      const listaK = lista.map(element => {
        if (typeof element !== "string") {
          reject(new Error(`não é do tipo string.`))
        } else {
          return element.toUpperCase()
        }
      })
      resolve(console.log(`Lista modificada\n [${listaK}]`), sortWords(listaK))
    })
  }
  
  makeAllCaps(['carro', 'jorge', 'computador', 'javaScript'])