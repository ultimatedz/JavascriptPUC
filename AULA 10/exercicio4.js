function testeNumero(numero) {
    return new Promise((resolve, reject) => {
      if (numero > 10) {
        resolve(console.log(`O número ${numero} é maior que 10`))
      } else {
        reject(new Error(`O número ${numero} é menor que 10`))
      }
    })
  }

  testeNumero(20);
